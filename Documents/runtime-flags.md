# Runtime Flags

fran-desktop usa flags de runtime para detectar el entorno de ejecución y adaptar su comportamiento.

## Flags Disponibles

| Flag                       | Tipo      | Descripción                                                                                                                                  |
| -------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `window.__FDE_IN_DOCKER__` | `boolean` | `true` cuando corre en Docker, `false` en navegador local/Electron                                                                           |
| `window.__IS_DEV__`        | `boolean` | `true` en modo desarrollo (Docker dev), `false` en producción. Para desarrollo local (`bun run dev`), se detecta por hostname (`localhost`). |

## Funciones Helper

Todas exportadas desde `src/Shared/Utils/getRuntime.ts`:

| Función        | Retorna   | Descripción                                                   |
| -------------- | --------- | ------------------------------------------------------------- |
| `getRuntime()` | `Runtime` | Devuelve `'docker'`, `'browser'` o `'electron'`               |
| `isDocker()`   | `boolean` | `true` dentro de Docker                                       |
| `isBrowser()`  | `boolean` | `true` en navegador estándar (ni Docker ni Electron)          |
| `isElectron()` | `boolean` | `true` dentro de Electron                                     |
| `isDev()`      | `boolean` | `true` en Docker dev o localhost — usa hostname como fallback |

## Detección por Entorno

| Entorno                             | `__FDE_IN_DOCKER__` | `__IS_DEV__`                         |
| ----------------------------------- | ------------------- | ------------------------------------ |
| `bun run dev` (local)               | `false`             | Detectado por hostname (`localhost`) |
| Docker dev (`NODE_ENV=development`) | `true`              | `true` (inyectado)                   |
| Docker prod (`NODE_ENV=production`) | `true`              | `false`                              |

## Uso en Código

### TypeScript/React

```typescript
import { getRuntime, isDocker, isBrowser, isElectron, isDev } from '@shared/Utils/getRuntime';

// getRuntime() — returns 'docker' | 'browser' | 'electron'
const runtime = getRuntime();

// isDocker() — true when running inside a Docker container
if (isDocker()) {
  // Usar DockerFileSystemAdapter (API calls)
} else {
  // Usar IndexedDBFileSystem (local storage)
}

// isBrowser() — true in standard web browser (not Docker, not Electron)
if (isBrowser()) {
  // IndexedDB-only features
}

// isElectron() — true when running inside Electron
if (isElectron()) {
  // Native OS integrations
}

// isDev() — true in Docker dev mode or local dev server (localhost)
if (isDev()) {
  // Logging verbose, features de debug
}
```

### Service Worker

En el Service Worker no hay acceso a `window`, por lo que la detección se hace por hostname:

```javascript
const isDev = () => {
  return self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';
};

if (isDev()) {
  console.log('[SW] Development mode - logging enabled');
}
```

## Inyección de Flags

### `index.html` (valores por defecto)

```html
<script>
  window.__FDE_IN_DOCKER__ = false;
  window.__IS_DEV__ = false;
</script>
```

### Docker `entrypoint.sh`

```bash
# Inyectar __FDE_IN_DOCKER__ (siempre en Docker)
sed -i 's/window.__FDE_IN_DOCKER__ = false;/window.__FDE_IN_DOCKER__ = true;/' "$INDEX_HTML"

# Inyectar __IS_DEV__ solo en modo desarrollo
if [ "$NODE_ENV" = "development" ]; then
  sed -i 's/window.__IS_DEV__ = false;/window.__IS_DEV__ = true;/' "$INDEX_HTML"
fi
```

## Variables de Entorno Relacionadas

| Variable         | Entorno | Descripción                    |
| ---------------- | ------- | ------------------------------ |
| `NODE_ENV`       | Docker  | `development` o `production`   |
| `IN_DOCKER`      | Docker  | `true` (usado internamente)    |
| `WORKSPACE_PATH` | Docker  | Path al directorio del usuario |

## Service Worker y Caché

El Service Worker (`sw.js`) usa detecta el modo desarrollo para comportarse diferente:

- **En desarrollo**: Logs habilitados, API requests no se cachean
- **En producción**: Logs deshabilitados, solo assets estáticos se cachean

```javascript
// API requests nunca se cachean (deben ser frescos siempre)
if (url.pathname.startsWith('/api/')) {
  event.respondWith(fetch(event.request));
  return;
}
```

## Verificación en el Navegador

```javascript
// En la consola del navegador
console.log('In Docker:', window.__FDE_IN_DOCKER__);
console.log('Is Dev:', window.__IS_DEV__);
console.log('Runtime:', window.__FDE_API__?.fs ? 'Docker/API' : 'IndexedDB');
```

## Referencias

- [Runtime Detection](./architecture.md#runtime-detection) - Arquitectura de adaptadores
- [Docker Development](./docker/development.md) - Workflow de desarrollo
- [Docker Production](./docker/production.md) - Despliegue en producción
