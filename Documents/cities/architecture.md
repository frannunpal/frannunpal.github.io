# Cities — Architecture

> Arquitectura hexagonal del paquete `packages/cities`. Para el plan de implementación ver [`ACTION_PLAN.md`](../../packages/cities/ACTION_PLAN.md).

---

## Overview

Cities es un generador procedural de ciudades 2D/3D integrado en fde-desktop. Utiliza una arquitectura hexagonal (también conocida como "ports and adapters") para separar la lógica de dominio pura de los adaptadores de infraestructura y la presentación.

**Nota:** La generación se ejecuta en un **Web Worker** con Comlink para mantener la UI completamente fluida. Ver [`worker.md`](worker.md) para detalles.

```
┌─────────────────────────────────────────────────────────────────┐
│                        Presentation                             │
│  Components (MapCanvas, MapCanvas3D, DebugCanvas,              │
│                   InfoSidebar, ProgressOverlay)                 │
│  Hooks (useMapGeneration, useCanvasInteraction)                │
└─────────────────────────┬───────────────────────────────────────┘
                           │
┌─────────────────────────▼───────────────────────────────────────┐
│                      Application                                 │
│  UseCases (MapGenerationService, SeededRandom,                  │
│            AttributeGenerator, RegionalStyleService, yield)      │
│  Ports (IMapGenerator, GenerationParams)                         │
└─────────────────────────┬───────────────────────────────────────┘
                           │
┌─────────────────────────▼───────────────────────────────────────┐
│                         Domain                                   │
│  Entities (Tensor, Building, RegionalProfile, ColourScheme)     │
│  Geometry (TensorField, BasisField, Streamlines, Integrator,    │
│            Graph, PolygonFinder, WaterGenerator, ParkGenerator, │
│            GridStorage, PolygonUtil)                             │
│  ValueObjects (Serialization — Vector2 ↔ Float64Array)         │
│  Constants (GENERATION_PHASES, ZOOM_LIMITS, DEBUG_THEME, etc.) │
│  ⚠️ Usa THREE.Vector2 directamente (no entidad propia)          │
└─────────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────▼───────────────────────────────────────┐
│                     Infrastructure                               │
│  Adapters (DomainController, CanvasWrapper, CanvasRenderer,     │
│            DebugRenderer, BuildingMeshBuilder, MapMeshBuilder) │
│  Workers (mapGenerator.worker - Web Worker con Comlink)         │
│  Stores (citiesStore - Zustand con persist)                     │
└─────────────────────────────────────────────────────────────────┘
---

## Directory Structure

```

packages/cities/src/
├── Domain/ # Pure logic, no external dependencies
│ ├── Entities/
│ │ ├── Tensor.ts # Tensor for procedural generation
│ │ ├── Building.ts # Building entity + attributes
│ │ ├── ColourScheme.ts # Color themes for rendering
│ │ ├── RegionalProfile.ts # Regional style profiles
│ │ └── index.ts
│ ├── Geometry/
│ │ ├── TensorField.ts # Procedural tensor field
│ │ ├── BasisField.ts # Grid and radial basis fields
│ │ ├── Streamlines.ts # Road generation from tensor field
│ │ ├── Integrator.ts # RK4/Euler integration
│ │ ├── Graph.ts # Road network graph
│ │ ├── PolygonFinder.ts # City block detection
│ │ ├── PolygonUtil.ts # Polygon operations (JSTS, polyk)
│ │ ├── WaterGenerator.ts # Coastline/river generation
│ │ ├── ParkGenerator.ts # Park generation (big/small)
│ │ ├── GridStorage.ts # Spatial hash (d3-quadtree)
│ │ └── index.ts
│ ├── ValueObjects/
│ │ ├── Serialization.ts # Vector2 ↔ Float64Array conversion
│ │ └── index.ts
│ ├── Constants/
│ │ └── index.ts # GENERATION_PHASES, ZOOM_LIMITS, DEBUG_THEME, etc.
│ └── index.ts
│
├── Application/ # Use cases, coordinates domain
│ ├── Ports/
│ │ └── IMapGenerator.ts # Port: generation interface
│ ├── UseCases/
│ │ ├── MapGenerationService.ts # Main orchestration service
│ │ ├── SeededRandom.ts # Deterministic PRNG (Mulberry32)
│ │ ├── AttributeGenerator.ts # Building attribute generators
│ │ ├── RegionalStyleService.ts # Regional style assignment
│ │ └── yield.ts # yieldToMain() for non-blocking
│ └── index.ts
│
├── Infrastructure/ # Adapters, external concerns
│ ├── Adapters/
│ │ ├── DomainController.ts # Pan/zoom, coordinate transforms
│ │ ├── CanvasWrapper.ts # Canvas 2D drawing operations
│ │ ├── CanvasRenderer.ts # 2D map rendering
│ │ ├── DebugRenderer.ts # Tensor field visualization
│ │ ├── BuildingMeshBuilder.ts # 3D mesh generation (Three.js)
│ │ ├── MapMeshBuilder.ts # 3D terrain mesh generation
│ │ └── index.ts
│ ├── Workers/
│ │ ├── mapGenerator.worker.ts # Web Worker for generation
│ │ ├── MapGenerationWorkerProxy.ts # Comlink proxy for main thread
│ │ └── index.ts
│ ├── Stores/
│ │ ├── citiesStore.ts # Zustand state management (persist)
│ │ └── index.ts
│ └── index.ts
│
├── Presentation/ # React UI
│ ├── Components/
│ │ ├── MapCanvas/ # 2D canvas view with pan/zoom
│ │ ├── MapCanvas3D/ # 3D Three.js view (Three.js + drei)
│ │ ├── DebugCanvas/ # Tensor field debug view
│ │ ├── InfoSidebar/ # Building info panel
│ │ ├── ProgressOverlay/ # Generation progress UI
│ │ └── index.ts
│ ├── Hooks/
│ │ ├── useMapGeneration.ts # Generation orchestration
│ │ └── index.ts
│ └── index.ts
│
├── Integration/ # Entry points
│ ├── CitiesApp.tsx # Main app component
│ ├── CitiesAppMenuBar.tsx # Menu bar with seed/vista controls
│ ├── registerCitiesApp.ts # Registration function
│ └── index.ts
│
├── Shared/ # Shared utilities (cross-layer)
│ ├── Constants/
│ ├── Types/
│ ├── Utils/
│ └── index.ts
│
└── index.ts # Public exports

````

---

## Core Concepts

### 1. Deterministic Generation

Every city is generated from a seed string. The same seed always produces the same city:

```typescript
const params: GenerationParams = {
  seed: 'tokyo-2077', // Same seed → same city
  width: 800,
  height: 600,
};

const result = await service.generate(params);
````

**Implementation:**

- `SeededRandom` uses MurmurHash3 for strings → uint32, then Mulberry32 for deterministic sequences
- Attribute seeds are composed: `${cityName}-${buildingId}-${attributeId}`

### 2. Tensor Fields for Road Networks

Roads are generated using tensor field advection. Three.js `Vector2` is used directly (no wrapper class).

```
TensorField
├── GridBasisField(theta)     # Grid pattern at angle θ
├── RadialBasisField(centre)  # Radial pattern from centre
└── Noise(gradient)           # Simplex noise distortion
```

Streamlines are traced through the tensor field using RK4 integration, creating organic road networks.

### 3. Polygon Finding for City Blocks

After roads are generated:

1. `Graph` detects intersections from streamlines (uses `isect.bush()`)
2. `PolygonFinder` traces cycles to find city blocks
3. Blocks are shrunk (JSTS buffer negative) to create building footprints
4. Blocks are subdivided recursively if too large
5. Buildings are assigned `RegionalProfile` based on location

### 4. Non-Blocking Generation (No Worker)

Generation runs on the **main thread** with periodic `yieldToMain()` calls to keep UI responsive:

```typescript
// MapGenerationService.ts
import { yieldToMain } from './yield';

async function generate(params, onProgress) {
  // Phase 1: Tensor field
  await yieldToMain();
  onProgress?.('tensor-field', 0.1);

  // Phase 2: Roads
  for (const roadType of ['main', 'major', 'minor']) {
    await yieldToMain();
    onProgress?.(`${roadType}-roads`, progress);
  }
  // ...
}
```

**Why no worker?**

- Web Workers can't load Three.js properly (ES modules issues)
- Main thread chunking with yields provides same responsiveness
- Simpler architecture, no message serialization needed

### 5. 3D Building Meshes

Buildings are extruded from 2D footprints into 3D meshes using Three.js:

```typescript
const geometry = BuildingMeshBuilder.build(building);
// - Walls: ExtrudeGeometry from footprint
// - Roof: flat | gabled | hipped | mansard
// - Roof types use Shape + ShapeGeometry
```

### 6. DRY: Reusing Three.js Utilities

Instead of implementing our own utilities, we use Three.js directly:

| What we DON'T write         | What we USE instead            |
| --------------------------- | ------------------------------ |
| Vector2.ts (~180 lines)     | `THREE.Vector2`                |
| ColorParser.ts (~200 lines) | `THREE.Color`                  |
| BoundingBox.ts (~100 lines) | `THREE.Box2`                   |
| Math helpers (~50 lines)    | `THREE.MathUtils`              |
| PRNG (~30 lines)            | `THREE.MathUtils.seededRandom` |

This saves ~560 lines of code and ensures perfect 2D/3D integration.

---

## Data Flow

```
User Input (seed)
       │
       ▼
CitiesApp.tsx
       │
       ▼
useMapGeneration.ts ──── MapGenerationWorkerProxy (Comlink)
       │                              │
       │                              ▼ (in Web Worker)
       │                   MapGenerationService.generate(params)
       │                              │
       │                              ├──► TensorField.create()
       │                              │         ├── GridBasisField (procedural)
       │                              │         └── RadialBasisField (optional)
       │                              │
       │                              ├──► WaterGenerator.createCoast() / createRiver()
       │                              │
       │                              ├──► Streamlines.trace(tensorField)
       │                              │         └── RK4Integrator
       │                              │
       │                              ├──► Graph.detect(streamlines)
       │                              │
       │                              ├──► ParkGenerator.generateBigParks()
       │                              │         (before minor roads)
       │                              │
       │                              ├──► PolygonFinder.find(graph)
       │                              │
       │                              ├──► ParkGenerator.generateSmallParks()
       │                              │         (after minor roads)
       │                              │
       │                              ├──► RegionalStyleService.assignProfiles()
       │                              │
       │                              ├──► Buildings from polygons
       │                              │         └── AttributeGenerator.assignAttributes()
       │                              │
       │                              ▼
       │                   SerializedResult (Float64Array)
       │                              │
       ◄──────────────────────────────┘ (zero-copy transfer)
       │
       ▼
MapCanvas / MapCanvas3D / DebugCanvas
```

**Note:** Generation runs in a Web Worker with Comlink for zero-copy transfer. See [`worker.md`](worker.md) for details.

---

## Key Interfaces

### IMapGenerator

```typescript
interface IMapGenerator {
  generate(params: GenerationParams, onProgress?: ProgressCallback): Promise<GenerationResult>;
}

interface GenerationParams {
  seed: string;
  width: number;
  height: number;
  tensorFields?: TensorFieldConfig[];
  coastline?: CoastlineConfig;
  river?: RiverConfig;
  roads?: RoadsConfig;
  buildings?: BuildingsConfig;
  parks?: ParksConfig;
}

interface ParksConfig {
  enabled?: boolean;
  numBigParks?: number;
  numSmallParks?: number;
  clusterBigParks?: boolean;
  minParkArea?: number;
}

interface GenerationResult {
  mapData: GeneratedMapData;
  buildings: Building[];
}

type ProgressCallback = (phase: GenerationPhase, progress: number) => void;

type GenerationPhase =
  | 'initializing'
  | 'tensor-field'
  | 'coastline'
  | 'river'
  | 'main-roads'
  | 'major-roads'
  | 'big-parks'
  | 'minor-roads'
  | 'small-parks'
  | 'intersections'
  | 'blocks'
  | 'shrink'
  | 'divide'
  | 'buildings'
  | 'attributes'
  | 'complete';
```

### Building

```typescript
interface Building {
  id: string;
  footprint: Vector2[]; // THREE.Vector2[]
  height: number;
  roofType: RoofType;
  attributes: BuildingAttributes;
}

type RoofType = 'flat' | 'gabled' | 'hipped' | 'mansard';

interface BuildingAttributes {
  residents: number;
  manager: string;
  ipAddress: string;
  securityLevel: 'low' | 'medium' | 'high' | 'critical';
  buildingCode: string;
  neighborhoodId: string;
}
```

### GeneratedMapData

```typescript
interface GeneratedMapData {
  roads: {
    main: Vector2[][];
    major: Vector2[][];
    minor: Vector2[][];
  };
  coastline: Vector2[];
  seaPolygon: Vector2[];
  riverPolygon: Vector2[];
  parks: Vector2[][];
}
```

---

## Web Worker Architecture

Generation runs in a Web Worker via Comlink for zero-blocking UI. See [`worker.md`](worker.md) for full details.

**Key points:**

- `Float64Array` serialization for zero-copy transfer of `Vector2` data
- `Comlink.proxy()` for progress callbacks from worker
- Automatic fallback to main thread if workers unavailable

**Serialization layer:**

```typescript
// Vector2 → Float64Array (zero-copy transfer)
const serialized = serializePaths(roads.main);
const deserialized = deserializePaths(serialized);
```

---

## State Management (Zustand)

```typescript
interface CitiesStore {
  // Persisted to localStorage
  seed: string;
  viewMode: '2d' | '3d' | 'debug';
  colorSchemeId: string;
  debugShowTensors: boolean;
  debugShowCenters: boolean;
  debugShowGridLines: boolean;

  // Runtime (not persisted)
  generation: {
    status: 'idle' | 'generating' | 'done' | 'error';
    phase: GenerationPhase;
    progress: number;
    error: string | null;
  };
  mapData: SerializedMapData | null;
  buildings: SerializedBuilding[];
  selectedBuildingId: string | null;
  hoveredBuildingId: string | null;

  // Actions
  setSeed: (seed: string) => void;
  setViewMode: (mode: '2d' | '3d' | 'debug') => void;
  setColorScheme: (id: string) => void;
  setGenerating: (phase: GenerationPhase, progress: number) => void;
  setGenerationDone: (mapData: MapData, buildings: Building[]) => void;
  setGenerationError: (error: string) => void;
  selectBuilding: (id: string | null) => void;
  hoverBuilding: (id: string | null) => void;
  setDebugToggle: (key: string, value: boolean) => void;
}
```

The store uses `persist` middleware from Zustand with `partialize` to only persist UI preferences.

---

## Color Schemes

13 predefined color schemes for map rendering, with **exact values from MapGenerator original**:

```typescript
const COLOUR_SCHEMES = {
  default: { bgColour: 'rgb(236,229,219)', seaColour: '#a9d9fe', grassColour: '#c5e8c5', ... },
  apple: { bgColour: 'rgb(248,245,238)', zoomBuildings: true, outlineSize: 2, ... },
  appleDark: { bgColour: 'rgb(43,45,47)', outlineSize: 1, ... },
  // ... 10 more schemes
};
```

**Theme selector:** A dropdown in MenuBar allows switching between schemes. The selected scheme persists in localStorage via Zustand's `persist` middleware.

**Flow:** `MenuBar selects scheme` → `citiesStore.setColorSchemeId()` → `MapCanvas/MapCanvas3D` re-renders with new colors.

---

## Debug Theme

Debug view uses a consistent color scheme defined in `DEBUG_THEME`:

```typescript
// packages/cities/src/Domain/Constants/index.ts
export const DEBUG_THEME = {
  bgColour: 'black', // Canvas background
  tensorColour: 'white', // Tensor cross glyphs
  tensorLineWidth: 1, // Cross line width
  centreColour: 'red', // Field center markers
  centreSize: 7, // Center marker size in pixels
  gridLineColour: 'rgba(255,255,255,0.125)', // Grid lines between centers
  gridLineWidth: 0.5, // Grid line width
} as const;
```

**Debug Controls:** In debug mode, the InfoSidebar shows toggles for tensors, centers, grid lines, and a spacing slider.

---

## Integration with fde-desktop

```typescript
// In your app's entry point
import { registerCitiesApp } from '@fde-desktop/cities';

registerCitiesApp({
  appId: 'cities',
  appName: 'Cities',
  fcIcon: 'FcGlobe',
  defaultWidth: 900,
  defaultHeight: 600,
});

// CitiesApp appears in the launcher
```

The app provides:

- **2D view**: Canvas-based map with pan/zoom/drag
- **3D view**: Three.js + @react-three/fiber with OrbitControls
- **Debug view**: Tensor field visualization with cross glyphs
- **InfoSidebar**: Building list, stats, selection
- **ProgressOverlay**: Generation progress with phases
- **Seed input**: Deterministic regeneration

### View Modes

```typescript
type ViewMode = '2d' | '3d' | 'debug';

// 2D: Canvas rendering with pseudo-3D at high zoom
// 3D: Three.js with extruded buildings, OrbitControls
// Debug: Tensor field visualization (cross glyphs, centers, grid lines)
```

---

## Testing Strategy

```
Domain/          → Pure unit tests (no mocks needed, uses THREE.Vector2)
Application/     → UseCase tests with yieldToMain mocking
Infrastructure/  → Adapter tests with canvas mocks
Presentation/    → React Testing Library + jsdom
```

Run tests:

```bash
cd packages/cities
bun run test
bun run typecheck
bun run lint
```

**Key changes from original MapGenerator:**

- Web Worker with Comlink for zero-blocking generation
- Float64Array serialization for Zero-copy Vector2 transfer
- Park generation (big parks before minor roads, small parks after)
- River generation enabled by default for coastal cities
- Uses THREE.Vector2 directly (no wrapper)
- 3 view modes: 2D, 3D, Debug
- Regional profiles for neighborhood styles
- Zustand store with persist middleware

---

## Future Enhancements

1. **Texture Support**: BuildingMeshBuilder ready for material textures
2. **Shadows**: DirectionalLight with shadow maps in MapCanvas3D
3. **More Roof Types**: Gambrel, shed roofs
4. **Building Interiors**: Floor subdivision, room generation
5. **Terrain**: Height map integration
6. **Export**: STL/OBJ export for 3D printing
