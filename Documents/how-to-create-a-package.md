# Cómo crear un nuevo package interno

Esta guía documenta el proceso completo para añadir un nuevo package de workspace (`packages/mi-paquete/`) al monorepo de fde-desktop, incluyendo la integración con Vite y TypeScript para que los cambios en el source se reflejen **en tiempo real sin compilar**, igual que `core` y `cities`.

---

## El principio clave: source directo, no dist

En este monorepo hay dos modelos de resolución de packages:

| Package | En dev apunta a... | Necesita build para dev? |
|---|---|---|
| `@fde-desktop/fde-core` | `packages/core/src/index.ts` | No ✅ |
| `@fde-desktop/cities` | `packages/cities/src/` | No ✅ |
| `@fde-desktop/pixi-vn` | `packages/pixi-vn/src/index.ts` | No ✅ |
| paquete npm externo | `node_modules/*/dist/` | Sí (es ajeno) |

El truco está en que `vite.config.ts` y `tsconfig.app.json` tienen **aliases explícitos** que apuntan al source TypeScript del paquete. Vite transpila ese source en el mismo proceso de dev, haciendo que HMR funcione y que el `dist/` quede completamente ignorado en desarrollo.

> **Lección aprendida (pixi-vn):** `dist/index.js` puede ser código antiguo si no se ha hecho build tras un refactor. Si el source y el dist difieren, el bug aparecerá solo en el navegador y será muy difícil de rastrear. La solución es apuntar siempre al source.

---

## Pasos para crear un nuevo package

### 1. Crear la estructura de carpetas

```
packages/mi-paquete/
├── src/
│   ├── Domain/
│   │   └── Entities/
│   ├── Application/
│   │   └── Ports/
│   ├── Infrastructure/
│   │   └── Adapters/
│   ├── Presentation/
│   │   ├── Components/
│   │   └── Hooks/
│   ├── Shared/
│   │   └── Constants/
│   ├── Integration/          # Componentes que integran el paquete en fde-desktop
│   └── index.ts              # Entry point — exporta todo lo público
├── package.json
├── tsconfig.json
├── vite.lib.config.ts        # Solo para publicar en npm (no para dev)
└── vitest.config.ts
```

Seguir la arquitectura hexagonal documentada en `programming_rules.md`. El `index.ts` es el único punto de entrada público.

---

### 2. `package.json`

```json
{
  "name": "@fde-desktop/mi-paquete",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "vite build --config vite.lib.config.ts",
    "dev": "vite build --config vite.lib.config.ts --watch",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint src --report-unused-disable-directives"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "dependencies": {
    "@fde-desktop/fde-core": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "jsdom": "^29.0.0",
    "typescript": "~5.9.3",
    "vite": "^6.0.0",
    "vite-plugin-dts": "^4.0.0",
    "vitest": "^3.0.0"
  }
}
```

> **Nota:** El `dist/` solo se usa al publicar en npm. En desarrollo, Vite lo ignora completamente gracias al alias (paso 4).

---

### 3. `tsconfig.json` del paquete

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "src/**/*.test.ts", "src/**/*.test.tsx"]
}
```

---

### 4. Registrar el alias en el raíz del proyecto ⚠️ OBLIGATORIO

Este es el paso crítico. Sin esto, Vite resuelve el paquete desde `node_modules/*/dist/` (código compilado y posiblemente desactualizado).

#### `vite.config.ts`

```ts
resolve: {
  alias: {
    // ... aliases existentes ...
    '@fde-desktop/fde-core': resolve(__dirname, 'packages/core/src/index.ts'),
    '@fde-desktop/cities': resolve(__dirname, 'packages/cities/src'),
    '@fde-desktop/pixi-vn': resolve(__dirname, 'packages/pixi-vn/src/index.ts'),

    // NUEVO PACKAGE:
    '@fde-desktop/mi-paquete': resolve(__dirname, 'packages/mi-paquete/src/index.ts'),
  },
},
```

#### `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@fde-desktop/fde-core": ["packages/core/src"],
      "@fde-desktop/fde-core/*": ["packages/core/src/*"],
      "@fde-desktop/pixi-vn": ["packages/pixi-vn/src/index.ts"],
      "@fde-desktop/pixi-vn/*": ["packages/pixi-vn/src/*"],

      // NUEVO PACKAGE:
      "@fde-desktop/mi-paquete": ["packages/mi-paquete/src/index.ts"],
      "@fde-desktop/mi-paquete/*": ["packages/mi-paquete/src/*"]
    }
  },
  // Incluir el source del nuevo package para que TypeScript lo compile:
  "include": ["src", "packages/pixi-vn/src", "packages/mi-paquete/src"]
}
```

> Sin el `include`, TypeScript no procesa los archivos del paquete y los errores de tipos quedan silenciados.

---

### 5. Instalar el paquete en el workspace raíz

```bash
bun add @fde-desktop/mi-paquete@workspace:*
```

Esto añade la entrada en `package.json` raíz para que bun lo reconozca como parte del workspace.

---

### 6. Registrar la app en `AppRegistry.tsx`

Si el paquete expone una o más apps, añadirlas en [src/Presentation/Components/Window/AppRegistry.tsx](../src/Presentation/Components/Window/AppRegistry.tsx):

```ts
// En userAppEntries (metadatos):
{
  id: 'mi-app',
  name: 'Mi App',
  icon: '🎯',
  fcIcon: 'FcSomething',
  singleWindow: true,
  defaultWidth: 1024,
  defaultHeight: 768,
},

// En userApps (loader del componente):
'mi-app': {
  loader: () => import('@fde-desktop/mi-paquete').then(m => ({ default: m.MiApp })),
  isLazy: true,
},
```

---

### 7. `vitest.config.ts`

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [],
    globals: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
```

---

### 8. `vite.lib.config.ts` (solo para publicación en npm)

Este archivo solo se usa para generar el `dist/` cuando se publica el paquete en npm. En desarrollo es irrelevante porque el alias apunta al source.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

const externalPackages = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
];

const externalRegex = new RegExp(
  `^(${externalPackages.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(/.*)?$`
);

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], rollupTypes: true, tsconfigPath: './tsconfig.json' }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: id => externalRegex.test(id),
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
```

---

## Checklist de integración

Antes de dar por integrado un nuevo package, verificar:

```
[ ] packages/mi-paquete/src/index.ts exporta todo lo público
[ ] vite.config.ts tiene el alias apuntando a src/index.ts
[ ] tsconfig.app.json tiene los paths para el paquete
[ ] tsconfig.app.json incluye packages/mi-paquete/src en "include"
[ ] bun add @fde-desktop/mi-paquete@workspace:* ejecutado
[ ] AppRegistry.tsx registra la app (si aplica)
[ ] bun run typecheck pasa sin errores
[ ] bun run lint pasa sin errores
[ ] bun test pasa
[ ] Verificado en Chrome Y Firefox (WebGL, WebGPU, etc.)
```

---

## Cómo saber si el alias está funcionando

En el navegador, abre DevTools → Sources y busca el archivo del paquete. Si la ruta es:

- `packages/mi-paquete/src/...` → ✅ Apunta al source, HMR activo
- `node_modules/@fde-desktop/mi-paquete/dist/...` → ❌ Apunta al dist compilado — falta el alias

Alternativamente, modifica un archivo del source y comprueba si el HMR recarga el módulo automáticamente.

---

## Estructura de imports internos al paquete

Dentro del source del paquete, usar **siempre rutas relativas** para imports internos. No usar aliases como `@domain/` o `@/` en imports que crucen capas dentro del mismo paquete — el tsconfig raíz no los resuelve para paquetes anidados.

```ts
// ✅ Correcto — ruta relativa
import type { IPixiVnEngine } from '../../Application/Ports/IPixiVnEngine';

// ❌ Incorrecto — alias interno no resuelto por el tsconfig raíz
import type { IPixiVnEngine } from '@domain/Application/Ports/IPixiVnEngine';
```

Para imports de otros packages del workspace, sí usar el nombre del paquete:

```ts
// ✅ Correcto — nombre de paquete workspace
import type { AppComponent } from '@fde-desktop/fde-core';
```
