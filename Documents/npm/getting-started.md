# Getting Started with @fde-desktop/fde-core

This guide walks you through building a desktop environment from scratch using `@fde-desktop/fde-core`.

## Prerequisites

- Node.js 18+ or Bun
- React 19
- TypeScript (recommended)
- Vite (recommended bundler)

## 1. Create a new project

```bash
npm create vite@latest my-desktop -- --template react-ts
cd my-desktop
```

## 2. Install dependencies

```bash
npm install @fde-desktop/fde-core
npm install @mantine/core @mantine/hooks @mantine/dates
npm install framer-motion react-rnd react-i18next i18next
npm install zustand react-icons
```

The package includes these as bundled dependencies. You only need to install them explicitly if you want to use them directly in your own code.

## 3. Set up Mantine

Wrap your app with the Mantine provider. The package uses Mantine v8 for its built-in apps.

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
```

## 4. Initialize the file system

The desktop needs a file system. For browser environments, use `IndexedDBFileSystem`. It must be initialized before rendering:

```tsx
// src/App.tsx
import { useEffect, useState } from 'react';
import { fileSystem } from '@fde-desktop/fde-core';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fileSystem.initialize().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Loading...</div>;

  return <Desktop />;
}
```

`fileSystem` is the singleton `IndexedDBFileSystem` instance exported from the package. It stores files in IndexedDB under the `fde-desktop-fs` database.

## 5. Build the Desktop component

Use the `useDesktopStore` and `useOpenApp` hooks to drive the UI:

```tsx
// src/Desktop.tsx
import { useDesktopStore, useOpenApp, CORE_APPS } from '@fde-desktop/fde-core';

export function Desktop() {
  const windows = useDesktopStore(s => s.windows);
  const icons = useDesktopStore(s => s.icons);
  const openApp = useOpenApp();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Desktop icons */}
      {icons.map(icon => (
        <div
          key={icon.id}
          style={{ position: 'absolute', left: icon.x, top: icon.y, cursor: 'pointer' }}
          onDoubleClick={() => openApp(icon.appId)}
        >
          {icon.name}
        </div>
      ))}

      {/* Open windows — build your own Window component */}
      {windows.map(win => (
        <YourWindowComponent key={win.id} window={win} />
      ))}

      {/* Taskbar or launcher */}
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {CORE_APPS.map(app => (
          <button key={app.id} onClick={() => openApp(app.id)}>
            {app.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## 6. Render windows with core apps

Core apps are React components exported from the package. Render them inside your own window container:

```tsx
// src/YourWindowComponent.tsx
import type { WindowEntity } from '@fde-desktop/fde-core';
import { useDesktopStore } from '@fde-desktop/fde-core';
import {
  FilesApp,
  SettingsApp,
  NotepadApp,
  ImageViewerApp,
  PdfApp,
} from '@fde-desktop/fde-core';

// Map app IDs to components
const APP_COMPONENTS: Record<string, React.ComponentType<any>> = {
  files: FilesApp,
  settings: SettingsApp,
  notepad: NotepadApp,
  'image-viewer': ImageViewerApp,
  pdf: PdfApp,
};

interface Props {
  window: WindowEntity;
}

export function YourWindowComponent({ window: win }: Props) {
  const { closeWindow } = useDesktopStore();
  const AppComponent = APP_COMPONENTS[win.content];

  if (!AppComponent) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: win.x,
        top: win.y,
        width: win.width,
        height: win.height,
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: 4,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
        <span>{win.title}</span>
        <button onClick={() => closeWindow(win.id)}>×</button>
      </div>
      <div style={{ height: 'calc(100% - 32px)', overflow: 'auto' }}>
        <AppComponent window={win} notifyReady={() => {}} />
      </div>
    </div>
  );
}
```

### WindowContentProps

All core app components expect `WindowContentProps`:

```typescript
interface WindowContentProps {
  window?: WindowEntity;     // The window entity (metadata + contentData)
  notifyReady?: (contentData?: Record<string, unknown>) => void;
}
```

Pass a no-op `notifyReady` if you don't need app-to-window communication.

## 7. Open apps programmatically

```tsx
import { useOpenApp } from '@fde-desktop/fde-core';

function MyLauncher() {
  const openApp = useOpenApp();

  return (
    <div>
      <button onClick={() => openApp('files')}>Files</button>
      <button onClick={() => openApp('notepad', { contentData: { initialContent: '# Hello' } })}>
        Notepad
      </button>
    </div>
  );
}
```

## 8. Add desktop icons

Use `useDesktopStore` to register icons on the desktop:

```tsx
import { useDesktopStore, createDesktopIcon, CORE_APPS } from '@fde-desktop/fde-core';

function useInitDesktop() {
  const { icons, mergeDesktopApps } = useDesktopStore();

  useEffect(() => {
    if (icons.length === 0) {
      // Seed desktop with core app icons
      const initialIcons = CORE_APPS.map((app, i) =>
        createDesktopIcon({
          appId: app.id,
          x: 20,
          y: 20 + i * 100,
          name: app.name,
          fcIcon: app.fcIcon,
        }),
      );
      mergeDesktopApps(initialIcons);
    }
  }, []);
}
```

## 9. Settings and themes

```tsx
import { useSettingsStore } from '@fde-desktop/fde-core';

function ThemeToggle() {
  const { theme, toggleTheme } = useSettingsStore();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme.mode === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

## 10. Notifications

```tsx
import { useNotifications } from '@fde-desktop/fde-core';

function MyApp() {
  const { showNotification } = useNotifications();

  const handleClick = () => {
    showNotification({
      title: 'Done',
      message: 'Operation completed!',
      type: 'success',
    });
  };

  return <button onClick={handleClick}>Do something</button>;
}
```

## 11. Runtime detection

```tsx
import { getRuntime, isDocker, isBrowser } from '@fde-desktop/fde-core';

const runtime = getRuntime(); // 'browser' | 'docker' | 'electron'

if (isDocker()) {
  // Use DockerFileSystemAdapter for API-based FS
}

if (isBrowser()) {
  // Use IndexedDBFileSystem (default)
}
```

## 12. i18n (optional)

The package ships a pre-configured i18next instance supporting English and Spanish:

```tsx
import { i18n } from '@fde-desktop/fde-core';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Desktop />
    </I18nextProvider>
  );
}
```

The `useSettingsStore` exposes `language` and `setLanguage` to switch languages at runtime. Use `useLanguageSync` from the package to keep the i18n instance in sync with the store.

## Complete minimal example

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { I18nextProvider } from 'react-i18next';
import { i18n, fileSystem } from '@fde-desktop/fde-core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import App from './App';

fileSystem.initialize().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MantineProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </MantineProvider>
    </React.StrictMode>,
  );
});
```

```tsx
// src/App.tsx
import { useDesktopStore, useOpenApp, CORE_APPS, FilesApp, SettingsApp } from '@fde-desktop/fde-core';
import type { WindowEntity } from '@fde-desktop/fde-core';

const APPS: Record<string, React.ComponentType<any>> = {
  files: FilesApp,
  settings: SettingsApp,
};

function Window({ win }: { win: WindowEntity }) {
  const close = useDesktopStore(s => s.closeWindow);
  const Comp = APPS[win.content];
  if (!Comp) return null;
  return (
    <div style={{ position: 'absolute', left: win.x, top: win.y, width: win.width, height: win.height, background: 'white', border: '1px solid #999' }}>
      <div><span>{win.title}</span><button onClick={() => close(win.id)}>×</button></div>
      <Comp window={win} notifyReady={() => {}} />
    </div>
  );
}

export default function App() {
  const windows = useDesktopStore(s => s.windows);
  const openApp = useOpenApp();
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a2e', position: 'relative' }}>
      {windows.map(w => <Window key={w.id} win={w} />)}
      <div style={{ position: 'absolute', bottom: 0, display: 'flex', gap: 8, padding: 8 }}>
        {CORE_APPS.map(app => (
          <button key={app.id} onClick={() => openApp(app.id)}>{app.name}</button>
        ))}
      </div>
    </div>
  );
}
```

## Next steps

- [API Reference](./api-reference.md) — all exported symbols
- [architecture.md](../architecture.md) — how the main app is structured
- [how-to-create-an-app.md](../how-to-create-an-app.md) — adding built-in apps
- [custom-apps.md](../custom-apps.md) — standalone apps via `window.__FDE_API__`
