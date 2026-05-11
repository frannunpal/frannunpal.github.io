# `@fde-desktop/cities` — React Architecture

Cómo usar la librería desde React: desde el caso más simple hasta el control total.

---

## Niveles de uso

| Nivel                   | Qué importas                                  | Cuándo usarlo                            |
| ----------------------- | --------------------------------------------- | ---------------------------------------- |
| **Plug & play**         | Automático en `userApps`                      | La app ya está registrada por defecto    |
| **App con seed**        | `useOpenApp()` con contentData                | Abres la app pasando un nombre de ciudad |
| **Componentes sueltos** | `MapCanvas`, `MapCanvas3D`, `DebugCanvas`     | Embedes el visor en tu propia UI         |
| **Generación directa**  | `MapGenerationService`                        | Generas datos sin UI                     |
| **Control total**       | `TensorField`, `Streamlines`, `PolygonFinder` | Algoritmo personalizado                  |

---

## Nivel 1 — Plug & play (Automático)

Cities ya está registrado en `src/Presentation/Components/Window/AppRegistry.tsx` como parte de `userApps`. No necesitas hacer nada — la app aparece automáticamente en el launcher.

```tsx
// App.tsx
import { FdeDesktop } from '@fde-desktop/fde-core';
import { userApps } from '@presentation/Components/Window/AppRegistry';

export function App() {
  return <FdeDesktop customApps={userApps} />;
}
```

La ciudad se genera con seed `'default-city'` cuando el usuario abre "Cities" desde el launcher.

---

## Nivel 2 — Abrir la app con un nombre de ciudad

```tsx
import { useOpenApp } from '@fde-desktop/fde-core';

function MyButton() {
  const openApp = useOpenApp();

  return (
    <button onClick={() => openApp('cities', { contentData: { seed: 'Madrid' } })}>
      Explorar Madrid
    </button>
  );
}
```

Mismo nombre → misma ciudad siempre. Funciona con cualquier string.

---

## Nivel 4 — Componentes sueltos

Si quieres integrar el visor en tu propia app sin usar `CitiesApp`:

### MapCanvas (2D)

```tsx
import { MapCanvas } from '@fde-desktop/cities';

function My2DView() {
  return (
    <div style={{ width: 800, height: 600 }}>
      <MapCanvas
        mapData={mapData}
        buildings={buildings}
        domainController={domainController}
        colourScheme={colourScheme}
        onBuildingClick={id => console.log('clicked', id)}
        onBuildingHover={id => console.log('hover', id)}
      />
    </div>
  );
}
```

### MapCanvas3D (3D)

```tsx
import { MapCanvas3D, BuildingMeshBuilder } from '@fde-desktop/cities';

function My3DView() {
  const meshBuilder = useMemo(() => new BuildingMeshBuilder(), []);

  return (
    <div style={{ width: 800, height: 600 }}>
      <MapCanvas3D
        buildings={buildings}
        meshBuilder={meshBuilder}
        onBuildingClick={id => console.log('clicked', id)}
      />
    </div>
  );
}
```

### DebugCanvas (Debug)

```tsx
import { DebugCanvas, DomainController, CanvasWrapper } from '@fde-desktop/cities';

function MyDebugView() {
  const domainController = useMemo(() => new DomainController({ width: 800, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapper = useMemo(
    () => (canvasRef.current ? new CanvasWrapper(canvasRef.current, 800, 600) : null),
    [],
  );

  return (
    <div style={{ width: 800, height: 600 }}>
      <canvas ref={canvasRef} />
      <DebugCanvas
        domainController={domainController}
        canvasWrapper={canvasWrapper}
        tensorField={tensorField}
        options={{
          showTensors: true,
          showCenters: true,
          showGridLines: false,
          tensorSpacing: 50,
        }}
      />
    </div>
  );
}
```

---

## Nivel 5 — Generación directa

Sin UI. Genera datos de ciudad:

```tsx
import { MapGenerationService, GenerationParams } from '@fde-desktop/cities';

function useCityData(seed: string) {
  const [data, setData] = useState<{ mapData: any; buildings: any[] } | null>(null);
  const [progress, setProgress] = useState<{ phase: string; pct: number } | null>(null);

  useEffect(() => {
    const service = new MapGenerationService();

    const generate = async () => {
      const params: GenerationParams = {
        seed,
        width: 800,
        height: 600,
      };

      const result = await service.generate(params, (phase, pct) => {
        setProgress({ phase, pct });
      });

      setData(result);
    };

    generate();
  }, [seed]);

  return { data, progress };
}

function CityStats({ seed }: { seed: string }) {
  const { data, progress } = useCityData(seed);

  if (!data)
    return (
      <div>
        Generando... {progress?.phase} ({Math.round(progress?.pct * 100)}%)
      </div>
    );

  return (
    <ul>
      {data.buildings.map(b => (
        <li key={b.id}>
          {b.id} — altura: {b.height}m — tejado: {b.roofType}
        </li>
      ))}
    </ul>
  );
}
```

**Nota:** La generación es asíncrona con callbacks de progreso. Misma seed → mismo resultado siempre.

---

## Nivel 6 — hook useMapGeneration

Para integración completa con estado:

```tsx
import { useMapGeneration } from '@fde-desktop/cities';

function CityApp() {
  const { status, generate, cancel } = useMapGeneration();

  useEffect(() => {
    generate({ seed: 'default-city', width: 800, height: 600 });
  }, []);

  if (status.state === 'generating') {
    return (
      <div>
        <p>Generando: {status.phase}</p>
        <progress value={status.pct} max={1} />
      </div>
    );
  }

  if (status.state === 'done') {
    return <MapCanvas mapData={status.mapData} buildings={status.buildings} />;
  }

  return null;
}
```

---

## Nivel 7 — Personalizar atributos

Los atributos se generan automáticamente basándose en el perfil regional:

```tsx
import { AttributeGenerator, PREDEFINED_SCHEMAS } from '@fde-desktop/cities';

const generator = new AttributeGenerator();

// Generar atributos para un edificio
const attrs = generator.generateAttributes({
  buildingId: 'building-123',
  cityName: 'Madrid',
  neighborhoodId: 'downtown',
  profile: {
    subnet: '172.16.x.x',
    heightRange: [30, 100],
    roofWeights: { flat: 0.85, gabled: 0.1, hipped: 0.05 },
  },
});

console.log(attrs.residents); // 1-500
console.log(attrs.ipAddress); // 172.16.x.x (coherente con subnet)
console.log(attrs.securityLevel); // low | medium | high | critical
```

---

## Nivel 8 — Zustand Store

Usa el store para persistencia y estado compartido:

```tsx
import { useCitiesStore } from '@fde-desktop/cities';

function Controls() {
  const { seed, viewMode, setSeed, setViewMode } = useCitiesStore();

  return (
    <div>
      <input value={seed} onChange={e => setSeed(e.target.value)} placeholder="City seed" />
      <select value={viewMode} onChange={e => setViewMode(e.target.value as any)}>
        <option value="2d">2D</option>
        <option value="3d">3D</option>
        <option value="debug">Debug</option>
      </select>
    </div>
  );
}
```

**Persisted:** `seed`, `viewMode`, `colorSchemeId`, debug toggles se guardan en localStorage.

---

## View Modes

Cities soporta 3 modos de vista:

| Modo    | Componente    | Descripción                          |
| ------- | ------------- | ------------------------------------ |
| `2d`    | `MapCanvas`   | Canvas 2D con pseudo-3D en zoom alto |
| `3d`    | `MapCanvas3D` | Three.js con OrbitControls           |
| `debug` | `DebugCanvas` | Visualización de tensor field        |

---

## Patrones a evitar

**No crear MapGenerationService en cada render:**

```tsx
// ❌ Mal — nueva instancia en cada render
function Bad() {
  const service = new MapGenerationService();
  service.generate(...);
}

// ✅ Bien — instancia estable
const service = useMemo(() => new MapGenerationService(), []);

function Good() {
  service.generate(...);
}
```

**No usar seed vacía:**

```tsx
// ❌ Mal — resultados inconsistentes
generate({ seed: '', width: 800, height: 600 });

// ✅ Bien
generate({ seed: 'my-city', width: 800, height: 600 });
```

---

## Tipos exportados

```typescript
export { MapGenerationService } from './Application/UseCases/MapGenerationService';
export { SeededRandom } from './Application/UseCases/SeededRandom';
export { AttributeGenerator } from './Application/UseCases/AttributeGenerator';
export { PREDEFINED_SCHEMAS } from './Application/UseCases/AttributeGenerator';

export { MapCanvas } from './Presentation/Components/MapCanvas';
export { MapCanvas3D } from './Presentation/Components/MapCanvas3D';
export { DebugCanvas } from './Presentation/Components/DebugCanvas';
export { InfoSidebar } from './Presentation/Components/InfoSidebar';
export { DebugControls } from './Presentation/Components/InfoSidebar/DebugControls';
export { ProgressOverlay } from './Presentation/Components/ProgressOverlay';

export { useMapGeneration } from './Presentation/Hooks/useMapGeneration';

export { useCitiesStore } from './Infrastructure/Stores/citiesStore';

export { DomainController } from './Infrastructure/Adapters/DomainController';
export { CanvasWrapper } from './Infrastructure/Adapters/CanvasWrapper';
export { CanvasRenderer } from './Infrastructure/Adapters/CanvasRenderer';
export { DebugRenderer } from './Infrastructure/Adapters/DebugRenderer';
export { BuildingMeshBuilder } from './Infrastructure/Adapters/BuildingMeshBuilder';

export type {
  GenerationParams,
  GenerationResult,
  GenerationPhase,
  Building,
  BuildingAttributes,
  RoofType,
  ColourScheme,
  RegionalProfile,
  NeighborhoodStyle,
} from './Domain/Entities';
```

---

## Dependencias peer

```
@fde-desktop/cities
├── react, react-dom           (peer)
├── zustand                    (peer)
├── @mantine/core              (peer)
├── @fde-desktop/fde-core     (peer)
├── three                      (peer)
├── @react-three/fiber        (peer, opcional)
└── @react-three/drei          (peer, opcional)
```

Three.js es peer dependency. Si no está disponible, la vista 3D no funcionará pero la 2D sí.

---

## Theming Flow

El sistema de themes conecta MenuBar, Store y Renderers:

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│ CitiesAppMenuBar│────▶│ citiesStore  │────▶│ MapCanvas       │
│ (Select theme)  │     │ .setColorSch-│     │ (re-render on   │
│                 │     │ emeId()      │     │  colorSchemeId  │
│                 │     │              │     │  change)        │
└─────────────────┘     └──────┬───────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │ MapCanvas3D     │
                        │ (derives colors │
                        │  from scheme)   │
                        └─────────────────┘
```

**Persistencia:** `colorSchemeId` se guarda en localStorage automáticamente via Zustand `persist` middleware.

**Debug Controls:** En modo debug, `DebugControls` permite togglear visualización de tensores, centros y grid lines.
