# Cities App — UI Interactions Architecture

## Overview

UI interaction behaviors (building clicks, hover, camera fly-to) are decoupled from the 3D render pipeline. Schemas describe *how to render*; the interactions hook describes *what to do when the user acts*.

---

## `useCitiesInteractions` Hook

**Location:** `packages/cities/src/Presentation/Hooks/useCitiesInteractions.ts`

Central hook that owns all 3D map interaction logic. Called once inside `DeckGLMap` and injected into `SceneContext`.

```
DeckGLMap
  └── useCitiesInteractions()
        ├── handleBuildingClick(buildingId, feature)
        │     ├── selectBuilding(id) / deselect
        │     └── setFlyToTarget({ zoom: 17, pitch: 75–85°, centroid })
        └── handleBuildingHover(buildingId | null)
              ├── hoverBuilding(id)
              └── update cursor style
```

### Why `useCitiesStore.getState()` inside callbacks

These are event handlers, not render functions. Using the non-reactive `getState()` getter inside `useCallback` is the correct pattern — it avoids stale closures while keeping the callbacks stable (empty dep array → memoized forever).

---

## `SceneContext` Callbacks

**Location:** `packages/cities/src/Presentation/SceneGraph/types.ts`

```typescript
interface SceneContext {
  // ...existing render fields...
  onBuildingClick?: (buildingId: string, feature: unknown) => void;
  onBuildingHover?: (buildingId: string | null) => void;
}
```

These are optional — schemas that don't need them simply ignore them.

### Rule: Schemas must NOT import the store directly

`sceneElementSchemas.ts` must never call `useCitiesStore`. All behavior belongs in hooks. Schemas are pure render descriptions that receive behavior via `SceneContext`.

```
❌ schema onClick: useCitiesStore.getState().selectBuilding(id)
✅ schema onClick: ctx.onBuildingClick?.(id, feature)
```

---

## FlyTo on Building Click

When a building is selected (not deselected), the camera flies to the building centroid:

- **Zoom:** 17 (street level)
- **Pitch:** random 75–85° for a cinematic tilt
- **Bearing:** preserved from current camera state
- **Centroid:** computed as mean of the GeoJSON polygon ring coordinates

`flyToTarget` is already consumed by `useMapControls.ts` → `mapInstance.flyTo()` → cleared back to null. No other wiring needed.

---

## Theatre "City" Tab

**Location:** `packages/cities/src/Presentation/Components/CitiesTheatre/CitiesTheatre.tsx`

The Theatre right panel now has two tabs:

| Tab | Content |
|-----|---------|
| **Scene** | Scene graph node properties (`SceneElementProperties`) |
| **City** | City stats, building selection, generation params (`CityInfoPanel`) |

`CityInfoPanel` reads `viewMode` from the store. In 2D it shows `SunControls`; in 3D it shows `DayNightControls`. The "Settings" tool button overrides the tab system entirely (existing behavior preserved).

### `CityInfoPanel` vs `InfoSidebar`

| Component | Width | Usage |
|-----------|-------|-------|
| `CityInfoPanel` | fills parent | Theatre "City" tab, adaptive layouts |
| `InfoSidebar` | fixed 280px | 2D layout in `CitiesApp` |

`InfoSidebar` is now a thin `Box w={280}` wrapper around `CityInfoPanel`.

---

## Building Selection — Shared Across 2D and 3D

`selectedBuildingId` lives in `citiesStore` — a single source of truth. Both the 2D `MapCanvas` (canvas click) and 3D `DeckGLMap` (deck.gl layer click) write to the same field. Theatre's "City" tab reads from it directly. The selection experience is coherent across all views.

---

## Data Flow Diagram

```
User clicks building in 3D
  ↓
deck.gl layer onClick
  → ctx.onBuildingClick(buildingId, geoJsonFeature)
  → useCitiesInteractions.handleBuildingClick()
    → store.selectBuilding(id)
    → store.setFlyToTarget({ zoom: 17, pitch, centroid })
  ↓
useMapControls watches flyToTarget
  → mapInstance.flyTo(...)
  → setFlyToTarget(null)

  ↓
DeckGLScene3D: useScannerTime(selectedBuildingId !== null)
  → RAF loop → scanner shader animates on selected building

  ↓
Theatre "City" tab (if open): reads selectedBuildingId → shows BuildingInfo
```
