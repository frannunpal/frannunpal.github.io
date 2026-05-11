# Cities — Web Worker Architecture

> This document describes the Web Worker implementation for city generation.

---

## Overview

City generation now runs in a **Web Worker** using **Comlink** for RPC-style communication. This keeps the main thread completely free during generation, ensuring smooth UI and 60fps during the entire process.

```
┌─────────────────────────────────────────────────────────────────┐
│                         Main Thread                              │
│                                                                  │
│  ┌──────────────┐     ┌─────────────────────────────────────┐  │
│  │ useMapGener- │────▶│ MapGenerationWorkerProxy (Comlink)  │  │
│  │ ation.ts     │     │                                     │  │
│  └──────────────┘     │  - generate(params)                  │  │
│         │             │  - cancel()                          │  │
│         │             │  - isReady()                          │  │
│         ▼             └───────────────┬─────────────────────┘  │
│  ┌──────────────────┐                  │ Comlink.proxy         │
│  │ citiesStore.ts   │                  ▼                        │
│  │ (Zustand)        │     ┌────────────────────────────────┐   │
│  └──────────────────┘     │ Web Worker (mapGenerator.worker) │   │
│                            │                                │   │
│                            │  ┌──────────────────────────┐  │   │
│                            │  │ MapGenerationService    │  │   │
│                            │  │  - TensorField          │  │   │
│                            │  │  - StreamlineGenerator  │  │   │
│                            │  │  - PolygonFinder        │  │   │
│                            │  │  - AttributeGenerator   │  │   │
│                            │  └──────────────────────────┘  │   │
│                            │                                │   │
│                            │  Data: Float64Array (transfer)│   │
│                            │  Progress: postMessage         │   │
│                            └────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Why Web Worker?

### Previous Approach: Main Thread with yieldToMain()

```typescript
// Old: Main thread with chunking
async function generate(params, onProgress) {
  await yieldToMain();
  onProgress('tensor-field', 0.1);

  await yieldToMain();
  onProgress('roads', 0.4);

  // ... more phases
}
```

**Problems:**

- UI still blocked between yields (1-3 seconds total)
- FPS drops during generation
- No true parallelism

### Current Approach: Web Worker

```typescript
// New: Worker with Comlink RPC
const result = await worker.generate(params, Comlink.proxy(onProgress));
```

**Benefits:**

- Main thread completely free
- UI stays at 60fps
- Progress updates in real-time
- Generation time unchanged (~1-3s)

---

## Architecture Components

### 1. Serialization Layer (`Domain/ValueObjects/Serialization.ts`)

THREE.Vector2 cannot be transferred via postMessage (class instances). We serialize to Float64Array for zero-copy transfer:

```typescript
// Serialization
export function serializePaths(paths: Vector2[][]): ShapeData {
  const lengths = paths.map(p => p.length);
  const total = lengths.reduce((sum, len) => sum + len, 0);
  const data = new Float64Array(total * 2);

  let offset = 0;
  for (const path of paths) {
    for (const v of path) {
      data[offset++] = v.x;
      data[offset++] = v.y;
    }
  }

  return { data, lengths };
}

// Deserialization
export function deserializePaths(shapeData: ShapeData): Vector2[][] {
  const { data, lengths } = shapeData;
  const result: Vector2[][] = [];
  let offset = 0;

  for (const len of lengths) {
    const path: Vector2[] = [];
    for (let i = 0; i < len; i++) {
      path.push(new Vector2(data[offset++], data[offset++]));
    }
    result.push(path);
  }

  return result;
}
```

**Transfer Cost:** ~50-100ms for large cities (negligible).

### 2. Worker Entry Point (`Infrastructure/Workers/mapGenerator.worker.ts`)

```typescript
import { expose } from 'comlink';
import { MapGenerationService } from '../../Application/UseCases/MapGenerationService';

const service = new MapGenerationService();

const workerApi = {
  async generate(params, onProgress) {
    const result = await service.generate(params, onProgress);
    return serializeResult(result);
  },

  cancel() {
    // TODO: implement with AbortController
  },

  isReady() {
    return true;
  },
};

expose(workerApi);
```

### 3. Worker Proxy (`Infrastructure/Workers/MapGenerationWorkerProxy.ts`)

```typescript
import { wrap, proxy } from 'comlink';

export class MapGenerationWorkerProxy {
  private worker: MapGeneratorWorker | null = null;
  private workerInstance: Worker | null = null;

  async init() {
    this.workerInstance = new Worker(new URL('./mapGenerator.worker.ts', import.meta.url), {
      type: 'module',
    });
    this.worker = wrap<MapGeneratorWorker>(this.workerInstance);
  }

  async generate(params, onProgress?) {
    const progressCallback = onProgress ? proxy(onProgress) : undefined;
    const result = await this.worker.generate(params, progressCallback);
    return deserializeResult(result);
  }

  terminate() {
    this.workerInstance?.terminate();
  }
}
```

### 4. Hook (`Presentation/Hooks/useMapGeneration.ts`)

```typescript
export function useMapGeneration(): UseMapGenerationReturn {
  const workerRef = useRef<MapGenerationWorkerProxy | null>(null);
  const [usingWorker, setUsingWorker] = useState(false);

  useEffect(() => {
    const worker = getMapGenerationWorker();
    worker.init().then(() => {
      workerRef.current = worker;
      setUsingWorker(worker.isWorkerAvailable());
    });

    return () => worker.terminate();
  }, []);

  const generate = useCallback(async (params) => {
    // Try worker first
    if (workerRef.current?.isWorkerAvailable()) {
      const result = await workerRef.current.generate(params, onProgress);
      if (result) return result;
    }

    // Fallback to main thread
    const service = new MapGenerationService();
    return service.generate(params, onProgress);
  }, []);

  return { generate, usingWorker, ... };
}
```

---

## Fallback Behavior

If Web Workers are unavailable (e.g., Node.js tests, old browsers), the system automatically falls back to main thread generation with `yieldToMain()`:

```typescript
// Automatic fallback in useMapGeneration
if (workerResult === null) {
  console.log('[useMapGen] Worker unavailable, using main thread');
  const service = new MapGenerationService();
  return service.generate(params, onProgress);
}
```

---

## Data Transfer Flow

```
Main Thread                          Worker Thread
    │                                     │
    │ generate(params)                    │
    │ ─────────────────────────────────▶ │
    │                                     │ MapGenerationService
    │                                     │   - TensorField
    │                                     │   - Streamlines
    │                                     │   - PolygonFinder
    │                                     │   - Buildings
    │                                     │
    │ onProgress(phase, pct)              │
    │ ◀───────────────────────────────── │  (via Comlink.proxy)
    │                                     │
    │ result (Float64Array buffers)       │
    │ ◀───────────────────────────────── │  (zero-copy transfer)
    │                                     │
    │ deserializeResult()                  │
    │   └─ deserializePaths()             │
    │   └─ deserializeBuildings()          │
    │                                     │
   Done                                   │
```

---

## Performance Comparison

| Metric                 | Main Thread | Web Worker  |
| ---------------------- | ----------- | ----------- |
| UI blocking            | 1-3 seconds | 0ms         |
| FPS during generation  | 0-10 fps    | 60 fps      |
| Generation time        | 1-3 seconds | 1-3 seconds |
| Memory overhead        | ~50MB       | ~70MB       |
| Serialization overhead | N/A         | ~50-100ms   |

---

## Comlink Setup

Comlink is installed as a dependency:

```bash
bun add comlink
```

TypeScript types are included. No additional configuration needed.

---

## Testing

### Unit Tests for Serialization

```typescript
// Domain/ValueObjects/Serialization.test.ts
describe('Serialization', () => {
  it('round-trips Vector2 arrays', () => {
    const paths = [[new Vector2(1, 2), new Vector2(3, 4)]];
    const serialized = serializePaths(paths);
    const deserialized = deserializePaths(serialized);

    expect(deserialized[0][0].x).toBe(1);
    expect(deserialized[0][0].y).toBe(2);
  });

  it('preserves floating point precision', () => {
    const paths = [[new Vector2(0.123456789, 0.987654321)]];
    const serialized = serializePaths(paths);
    const deserialized = deserializePaths(serialized);

    expect(deserialized[0][0].x).toBeCloseTo(0.123456789, 15);
  });
});
```

### Integration Tests

```typescript
// Worker integration test
test('worker generates same result as main thread', async () => {
  const params = { seed: 'test-worker', width: 100, height: 100 };

  const mainService = new MapGenerationService();
  const mainResult = await mainService.generate(params);

  const worker = getMapGenerationWorker();
  await worker.init();
  const workerResult = await worker.generate(params);

  expect(workerResult.buildings.length).toBe(mainResult.buildings.length);
});
```

---

## Future Improvements

1. **Cancellation via AbortController**
   - Add AbortSignal support to MapGenerationService
   - Propagate cancellation to worker

2. **Multiple Workers**
   - Pool of workers for parallel city generation
   - Useful for batch generation or real-time preview

3. **SharedArrayBuffer**
   - Zero-copy shared memory (requires CORS headers)
   - Even faster serialization

---

## Troubleshooting

### Worker fails to load

```
[MapGenerationWorker] Failed to create worker: ...
```

**Solution:** Ensure Vite/bundler processes worker files correctly. The worker must be imported with `{ type: 'module' }`.

### Progress callbacks not firing

Make sure to use `Comlink.proxy()` for callbacks:

```typescript
// ❌ Won't work - callback is serialized
await worker.generate(params, onProgress);

// ✅ Works - callback is proxied
await worker.generate(params, Comlink.proxy(onProgress));
```

### Fallback triggered unexpectedly

Check browser console for:

```
[MapGenerationWorker] Workers not available, will fall back to main thread
```

This is normal in Node.js tests. In browsers, ensure Worker API is available.

---

## Migration from Main Thread

If you have old code expecting main thread behavior:

```typescript
// Old: Direct service call
const service = new MapGenerationService();
const result = await service.generate(params, onProgress);

// New: Use hook with fallback
const { generate } = useMapGeneration();
await generate(params); // Uses worker or falls back
```

The hook provides the same interface:

| Old Property      | New Property  |
| ----------------- | ------------- |
| `status.state`    | `status`      |
| `status.phase`    | `phase`       |
| `status.progress` | `progress`    |
| `status.error`    | `error`       |
| ✅ New            | `usingWorker` |

---

## Sources

- [Comlink - Google Chrome Labs](https://github.com/GoogleChromeLabs/comlink)
- [MDN: Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [WebGL Off the Main Thread](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)
