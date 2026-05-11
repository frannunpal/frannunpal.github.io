# Cities — 3D Rendering

Documentación del sistema de renderizado 3D (`MapCanvas3D`) y los builders de geometría.

---

## Configuración de GPU

El canvas de Three.js está configurado para maximizar el rendimiento de GPU:

```tsx
<Canvas
  camera={{ position: [0, 400, 600], fov: 45, up: [0, -1, 0] }}
  shadows
  gl={{
    powerPreference: 'high-performance', // Fuerza GPU de alto rendimiento
    antialias: true,                       // Suavizado de bordes
    alpha: false,                          // Sin transparencia (mejor rendimiento)
    depth: true,                           // Z-buffer activo
    stencil: false,                        // Sin stencil buffer (no necesario)
  }}
  dpr={[1, 2]}                             // Device pixel ratio limitado (1x-2x)
>
```

| Parámetro         | Valor                | Propósito                             |
| ----------------- | -------------------- | ------------------------------------- |
| `powerPreference` | `'high-performance'` | Prioriza GPU dedicada sobre integrada |
| `antialias`       | `true`               | MSAA para bordes suaves               |
| `alpha`           | `false`              | Evita blending costoso                |
| `depth`           | `true`               | Necesario para oclusión 3D            |
| `stencil`         | `false`              | Reduce uso de memoria GPU             |
| `dpr`             | `[1, 2]`             | Limita resolución en pantallas HiDPI  |

---

## Sistema de coordenadas

El sistema de coordenadas es **XY = plano del mapa, Z = altura**, idéntico al proyecto original MapGenerator y al `CanvasRenderer` 2D:

| Eje | Significado                                       |
| --- | ------------------------------------------------- |
| X   | Este (aumenta hacia la derecha)                   |
| Y   | Sur (aumenta hacia abajo, igual que el canvas 2D) |
| Z   | Altura (aumenta hacia arriba)                     |

Esto significa que un edificio con footprint en `(x, y)` y altura `h` tiene sus vértices de base en `(x, y, 0)` y su techo en `(x, y, h)`.

---

## Orientación de cámara

Para que el norte aparezca arriba en pantalla (como en el canvas 2D) se usa:

```
camera.up = [0, -1, 0]   // Y-negativo = arriba en pantalla
camera.position = defaultCameraPosition(groundSize)  // al sur, elevada
camera.lookAt(0, 0, 0)
```

**Efecto secundario:** `up=[0,-1,0]` invierte el eje X en la view matrix (espejo horizontal). Para compensarlo, toda la geometría del mapa se envuelve en un grupo con `scale={[-1, 1, 1]}`:

```tsx
<group scale={[-1, 1, 1]}>
  <group position={centerOffset}>
    <TerrainMeshes ... />
  </group>
  <group position={centerOffset}>
    {buildings.map(...)}
  </group>
</group>
```

El plano del suelo (`planeGeometry`) queda **fuera** de este grupo porque es simétrico y no necesita corrección.

---

## Builders de geometría

### `BuildingMeshBuilder`

| Método            | Implementación                            | Coordenadas                                       |
| ----------------- | ----------------------------------------- | ------------------------------------------------- |
| `buildWalls`      | `ExtrudeGeometry` sin rotación            | Z ∈ [0, height], XY = footprint                   |
| `buildFlatRoof`   | `ShapeGeometry` + `translate(0,0,height)` | Z = height                                        |
| `buildGabledRoof` | Vértices manuales                         | Z base = height, Z cumbrera = height + height×0.3 |
| `buildHippedRoof` | Vértices manuales                         | Z base = height, Z cúspide = height + height×0.25 |

`ExtrudeGeometry` extruye en +Z por defecto. Sin `rotateX`, los vértices quedan en:

- XY = coordenadas del footprint (espacio mapa)
- Z = 0 (base) … height (techo)

### `MapMeshBuilder`

| Método             | Elevación Z                 | Propósito                  |
| ------------------ | --------------------------- | -------------------------- |
| `buildRoadMesh`    | configurable (default 0.01) | Carreteras como ribbons    |
| `buildPolygonMesh` | configurable                | Polígonos planos genéricos |
| `buildSeaMesh`     | 0.005                       | Mar                        |
| `buildRiverMesh`   | 0.008                       | Río                        |
| `buildParksMeshes` | 0.003                       | Parques                    |

Todas las capas de terreno usan elevaciones Z distintas para evitar z-fighting:

```
Ground:  Z = 0.000
Parks:   Z = 0.003
Sea:     Z = 0.005
River:   Z = 0.008
Roads:   Z = 0.010
```

Los vértices de `buildRoadMesh` siguen el patrón `(x, y_mapa, z_elevación)` — mismo convenio que los polígonos.

---

## Centrado de la ciudad

Al cargar un nuevo mapa, `Scene` calcula el bounding box de todos los footprints y desplaza los grupos de geometría para centrar la ciudad en el origen:

```typescript
centerOffset = new Vector3(-cx, -cy, 0);
```

Donde `cx`, `cy` son los centros del bounding box en XY. La cámara se reposiciona automáticamente a una distancia proporcional al tamaño del mapa.

El botón ⌂ del HUD ejecuta `resetCameraRef.current()`, que restaura esta posición inicial. El ref es registrado por `Scene` (dentro del Canvas) y leído por `Hud` (fuera del Canvas) para evitar problemas de movimiento de cámara al renderizar controles en el mismo árbol que el Canvas.

---

## Modos de cámara

| Modo    | Control         | Uso                                      |
| ------- | --------------- | ---------------------------------------- |
| `orbit` | `OrbitControls` | Vista general, rotación libre            |
| `map`   | `MapControls`   | Pan + zoom, sin rotación (vista cenital) |
| `fly`   | `FlyControls`   | Navegación libre estilo FPS              |
