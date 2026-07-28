# TheatreEditor - Integration Documentation

> Theatre.js visual editor integration for real-time lighting parameter editing in DEV mode.

## Overview

TheatreEditor integrates [Theatre.js](https://www.theatrejs.com/) with the Cities 3D canvas for real-time editing of lighting parameters during development. The integration follows a **single source of truth** pattern where Zustand store is the central state manager.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Zustand Store (Fuente de Verdad)                     │
│                                                                              │
│  sunAngle: number                                                            │
│  sunElevation: number                                                        │
│  ambientIntensity: number                                                    │
│  directionalIntensity: number                                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
        ↑                                          │
        │                                          │
        │ onValuesChange                           │ useEffect
        │ setSunAngle()                            │ studio.transaction
        │ (isUpdatingFromTheatreRef.current=true)  │ value comparison
        │                                          │
┌───────┴─────────┐                ┌───────────────┴───────────────────────────┐
│   TheatreEditor  │                │              SunControls                 │
│ useTheatreValues │                │              (InfoSidebar)               │
│                  │                │                                          │
│ studio.transaction│◄─────────────── │  Slider onChange:                      │
│ ({ set }) => {   │                 │  → setSunAngle()                        │
│   set(obj.props, │                 │  → setSunElevation()                    │
│       value)     │                 │                                          │
│ }                │                 │                                          │
│                  │                 │                                          │
│ onValuesChange → │                 │                                          │
│   update store   │                 │                                          │
│ (schema-driven)  │                 │                                          │
└──────────────────┘                 └──────────────────────────────────────────┘
```

## Schema-Driven Architecture

The integration uses a central schema (`theatreSchema.ts`) that defines all Theatre-editable properties:

```typescript
export const THEATRE_PROPERTIES = {
  sunAngle: { min: 0, max: 360, defaultValue: 225, storeSetter: 'setSunAngle' },
  sunElevation: { min: 0, max: 90, defaultValue: 45, storeSetter: 'setSunElevation' },
  ambientIntensity: { min: 0, max: 3, defaultValue: 0.6, storeSetter: 'setAmbientIntensity' },
  directionalIntensity: {
    min: 0,
    max: 3,
    defaultValue: 0.8,
    storeSetter: 'setDirectionalIntensity',
  },
} as const;
```

**Benefits:**

- Single source of truth for property definitions
- Dynamic setter calls via schema (`storeSetter` names)
- Easy extensibility - add one entry to add a new property
- Type-safe with TypeScript

## Loop Prevention

To prevent infinite loops when syncing bidirectionally, we use:

1. **`useRef` for origin tracking** - prevents stuck state on unmount
2. **Value comparison** - avoids unnecessary syncs

```typescript
const isUpdatingFromTheatreRef = useRef(false);
const prevValuesRef = useRef<TheatreValues | null>(null);

// Theatre → Store: set ref before updating
onValuesChange((newValues) => {
  isUpdatingFromTheatreRef.current = true;
  // ...update store via schema...
  requestAnimationFrame(() => {
    isUpdatingFromTheatreRef.current = false;
  });
});

// Store → Theatre: skip if ref is true AND values unchanged
useEffect(() => {
  if (isUpdatingFromTheatreRef.current) return;
  if (prevValuesRef.current && valuesAreEqual(prevValuesRef.current, currentValues)) return;
  prevValuesRef.current = currentValues;
  studio.transaction(({ set }) => { ... });
}, [sunAngle, ...]);
```

## Components

### TheatreEditorProvider

Controls visibility of the Theatre.js UI panel. **Must be rendered OUTSIDE the Canvas.**

```tsx
<>
  {/* UI control - OUTSIDE Canvas */}
  <TheatreEditorProvider />

  <div>
    <Canvas>
      <TheatreEditorSheetProvider>
        <Scene />
      </TheatreEditorSheetProvider>
    </Canvas>
  </div>
</>
```

**Behavior:**

- Listens to `showTheatreEditor` state from Zustand
- Calls `studio.ui.restore()` when `showTheatreEditor=true`
- Calls `studio.ui.hide()` when `showTheatreEditor=false`
- Renders nothing (returns `null`)

### TheatreEditorSheetProvider

Provides SheetProvider context for R3F Theatre components. **Must be rendered INSIDE the Canvas.**

```tsx
<Canvas>
  <TheatreEditorSheetProvider>
    <Scene />
  </TheatreEditorSheetProvider>
</Canvas>
```

**Behavior:**

- Initializes Theatre.js sheet on mount
- Provides `SheetProvider` context for R3F editables
- Always renders children (no conditional logic)

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `active` | boolean | When true and in DEV mode, renders SheetProvider |
| `children` | ReactNode | Child components (Scene) |

### useTheatreValues()

Hook that synchronizes Theatre.js with Zustand store.

**Usage:**

```tsx
const theatreValues = useTheatreValues();

// theatreValues is null when:
// - Not in DEV mode (import.meta.env.DEV === false)
// - Theatre editor is not active

// theatreValues is TheatreValues when active:
// { sunAngle, sunElevation, ambientIntensity, directionalIntensity }
```

**Parameters:** None (reads directly from Zustand store)

**Returns:** `TheatreValues | null`

```typescript
interface TheatreValues {
  sunAngle: number;
  sunElevation: number;
  ambientIntensity: number;
  directionalIntensity: number;
}
```

## Synchronization Flow

### 1. Store → Theatre

When user changes sliders in Sidebar (`SunControls`):

```
Slider onChange → setSunAngle() → Zustand store
                                    ↓
                   useTheatreValues subscribes via useCitiesStore
                                    ↓
                   useEffect detects change
                                    ↓
                   valuesAreEqual() check → skip if unchanged
                                    ↓
                   prevValuesRef.current = currentValues
                                    ↓
                   studio.transaction(({ set }) => {
                     set(theatreObj.props.sunAngle, sunAngle)
                   })
```

### 2. Theatre → Store

When user edits in Theatre.js UI:

```
Theatre.js UI change → onValuesChange callback
                           ↓
                  isUpdatingFromTheatreRef.current = true
                           ↓
                  Schema-driven setter loop:
                  for (const key of getTheatrePropertyKeys()) {
                    store[THEATRE_PROPERTIES[key].storeSetter](newValues[key])
                  }
                           ↓
                      Zustand store
                           ↓
                      SunControls re-renders via useCitiesStore
                           ↓
                      requestAnimationFrame() →
                        isUpdatingFromTheatreRef.current = false
```

## Store Properties

| Property               | Type   | Default | Range | Description                           |
| ---------------------- | ------ | ------- | ----- | ------------------------------------- |
| `sunAngle`             | number | 225     | 0-360 | Sun azimuth (0=N, 90=E, 180=S, 270=W) |
| `sunElevation`         | number | 45      | 0-90  | Sun elevation (0=horizon, 90=zenith)  |
| `ambientIntensity`     | number | 0.6     | 0-3   | Ambient light intensity               |
| `directionalIntensity` | number | 0.8     | 0-3   | Directional (sun) light intensity     |

All properties are persisted in localStorage via Zustand's `persist` middleware.

## File Locations

| File                     | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `theatreSchema.ts`       | Central schema for Theatre-editable properties |
| `TheatreEditor.tsx`      | Main component and hooks                       |
| `TheatreEditor.test.tsx` | Unit tests                                     |
| `theatreSchema.test.ts`  | Schema function tests                          |
| `citiesStore.ts`         | Zustand store with lighting properties         |
| `SunControls.tsx`        | Sidebar UI controls                            |
| `MapCanvas3D.tsx`        | 3D canvas that uses Theatre values             |
| `CitiesAppMenuBar.tsx`   | Toggle button for Theatre editor               |

## Development Guide

### Adding New Theatre-Editable Properties

To add a new property (e.g., `fogDensity`):

1. **Add to Zustand store** (`citiesStore.ts`):

   ```typescript
   // State interface
   fogDensity: number;

   // Actions interface
   setFogDensity: (value: number) => void;

   // DEFAULT_STATE
   fogDensity: 0.1,

   // Setter implementation
   setFogDensity: (fogDensity: number) => set({ fogDensity }),

   // partialize (if persisted)
   fogDensity: state.fogDensity,
   ```

2. **Add to schema** (`theatreSchema.ts`):

   ```typescript
   export const THEATRE_PROPERTIES = {
     // ...existing properties...
     fogDensity: { min: 0, max: 1, defaultValue: 0.1, storeSetter: 'setFogDensity' },
   } as const;

   // Update TheatreValues interface
   export interface TheatreValues {
     // ...existing properties...
     fogDensity: number;
   }
   ```

That's it! The schema-driven architecture handles the rest:

- `generateTheatreObjectConfig()` automatically includes the new property
- `onValuesChange` calls `setFogDensity()` automatically
- Store → Theatre sync works automatically

## Testing

The test files use mocks from `src/test/__mocks__/` to avoid importing Theatre.js in tests:

- `theatre-core.mock.ts`
- `theatre-r3f.mock.ts`
- `theatre-studio.mock.ts`

These mocks are configured in `vitest.config.ts` via alias resolution.

### Test Coverage

| Test File                | Coverage                              |
| ------------------------ | ------------------------------------- |
| `TheatreEditor.test.tsx` | Component behavior, store integration |
| `theatreSchema.test.ts`  | Schema functions, value comparison    |

## Dependencies

| Package           | Version | Purpose                       |
| ----------------- | ------- | ----------------------------- |
| `@theatre/core`   | ^0.7.0  | Core Theatre.js library       |
| `@theatre/studio` | ^0.7.0  | Theatre.js visual editor      |
| `@theatre/r3f`    | ^0.7.0  | React Three Fiber integration |

## Technical Notes

### CJS/ESM Interop

Theatre.js exports CommonJS, requiring interop handling in Vite:

```typescript
const studio = (studioModule as any).default || studioModule;
```

### Canvas Configuration

The Canvas requires `preserveDrawingBuffer: true` for Theatre.js to work:

```tsx
<Canvas gl={{ preserveDrawingBuffer: true }}>
```

### DEV Mode Only

Theatre.js only loads when `import.meta.env.DEV === true`, ensuring zero overhead in production builds.

### Singleton Pattern

The Theatre `sheet` object is cached as a singleton to prevent recreation on re-renders:

```typescript
let cachedSheet: ISheet | null = null;
```

### useRef vs Module-Level Variables

We use `useRef` for change tracking instead of module-level variables because:

- React cleans up refs on unmount
- Prevents stuck state in Strict Mode
- More React-idiomatic

## Troubleshooting

### "studio.initialize is not a function"

**Cause:** CJS/ESM interop issue with Vite.

**Solution:** Ensure the interop pattern is used:

```typescript
const studio = (studioModule as any).default || studioModule;
```

### "sheet.object called twice with different config"

**Cause:** Theatre object created multiple times (component remounts, hot reload, etc.).

**Solution:** Use module-level singleton flag:

```typescript
let theatreObjCreated = false;

useEffect(() => {
  if (theatreObjCreated) return;
  theatreObjCreated = true;
  // Create theatre object...
}, []);
```

### "R3F: Hooks can only be used within the Canvas component"

**Cause:** `TheatreEditorProvider` placed outside `<Canvas>`, but it contained `SheetProvider`.

**Solution:** Split into two components:

```tsx
// TheatreEditorProvider - OUTSIDE Canvas, controls UI visibility
<TheatreEditorProvider />

// TheatreEditorSheetProvider - INSIDE Canvas, provides R3F context
<Canvas>
  <TheatreEditorSheetProvider>
    <Scene />
  </TheatreEditorSheetProvider>
</Canvas>
```

### Theatre editor UI doesn't hide when toggle is OFF

**Cause:** Only controlling `SheetProvider` rendering, not Theatre.js UI panel.

**Solution:** Use `studio.ui.hide()` / `studio.ui.restore()`:

```typescript
useEffect(() => {
  if (showTheatreEditor) {
    studio.ui.restore();
  } else {
    studio.ui.hide();
  }
}, [showTheatreEditor]);
```

### Theatre UI changes not reflected in Sidebar

**Cause:** `onValuesChange` not calling setters.

**Solution:** Verify the schema includes `storeSetter` for each property:

```typescript
THEATRE_PROPERTIES = {
  sunAngle: { ..., storeSetter: 'setSunAngle' },
  // ...
}
```

The `onValuesChange` handler uses schema-driven setters:

```typescript
for (const key of getTheatrePropertyKeys()) {
  const setterName = THEATRE_PROPERTIES[key].storeSetter;
  store[setterName](newValues[key]);
}
```

### Sidebar changes not reflected in Theatre UI

**Cause:** `isUpdatingFromTheatreRef` blocking sync, or values not changing.

**Solution:** Check value comparison in `useEffect`:

```typescript
useEffect(() => {
  if (!theatreObj || !showTheatreEditor) return;
  if (isUpdatingFromTheatreRef.current) return;

  const currentValues = { sunAngle, sunElevation, ... };
  if (prevValuesRef.current && valuesAreEqual(prevValuesRef.current, currentValues)) return;

  prevValuesRef.current = currentValues;
  studio.transaction(({ set }) => { ... });
}, [sunAngle, sunElevation, ...]);
```

### Infinite loop on Theatre changes

**Cause:** `isUpdatingFromTheatreRef.current` not being reset.

**Solution:** Ensure `requestAnimationFrame` resets the ref:

```typescript
requestAnimationFrame(() => {
  isUpdatingFromTheatreRef.current = false;
});
```

## See Also

- [Theatre.js Documentation](https://www.theatrejs.com/docs/latest)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Architecture Overview](./architecture.md)
