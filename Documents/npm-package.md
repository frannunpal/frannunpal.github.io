# NPM Package Integration Guide

This guide explains how to use `@fde-desktop/fde-core` to build your own desktop environment application.

## Installation

```bash
npm install @fde-desktop/fde-core react react-dom
```

## Quick Start

### 1. Install Dependencies

```bash
npm install @fde-desktop/fde-core react react-dom zustand @mantine/core @mantine/hooks framer-motion
```

### 2. Import Styles

```tsx
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// Or import from the package if bundled
```

### 3. Basic Usage

```tsx
import {
  CORE_APPS,
  useDesktopStore,
  useOpenApp,
  createWindow,
  createDesktopIcon,
} from '@fde-desktop/fde-core';

function App() {
  const { windows, openWindow } = useDesktopStore();
  const openApp = useOpenApp();

  return (
    <div className="desktop">
      {/* Your desktop UI */}
      {CORE_APPS.map(app => (
        <button key={app.id} onClick={() => openApp(app)}>
          {app.icon} {app.name}
        </button>
      ))}
    </div>
  );
}
```

## Core Concepts

### Apps

The package exports `CORE_APPS` - an array of desktop applications:

```typescript
import { CORE_APPS, FilesApp, SettingsApp } from '@fde-desktop/fde-core';

// Use individual apps
console.log(FilesApp.id); // 'files'
console.log(FilesApp.name); // 'FilesApp'

// Or use the array
CORE_APPS.forEach(app => {
  console.log(app.id, app.name);
});
```

### Stores (Zustand)

Access desktop state via stores:

```typescript
import { useDesktopStore, useSettingsStore, useCustomAppStore } from '@fde-desktop/fde-core';

// Desktop state
const { windows, openWindow, closeWindow, icons, fsNodes } = useDesktopStore();

// Settings
const { wallpaper, theme, language } = useSettingsStore();

// Custom apps (Docker)
const { customApps, registerApp } = useCustomAppStore();
```

### Runtime Detection

Detect the current runtime environment:

```typescript
import { getRuntime, isDocker, isBrowser, isElectron, isDev } from '@fde-desktop/fde-core';

if (isDocker()) {
  // Docker-specific logic
  // API calls available
}

if (isBrowser()) {
  // Browser-only logic
  // IndexedDB storage
}

if (isElectron()) {
  // Electron-specific
}
```

### File System

The package provides file system adapters:

```typescript
import { IndexedDBFileSystem, DockerFileSystemAdapter } from '@fde-desktop/fde-core';

// IndexedDB (browser-only)
const fs = new IndexedDBFileSystem();
await fs.initialize();

// Docker (API-based)
const dockerFs = new DockerFileSystemAdapter();
```

### Creating Apps

Define your own apps:

```typescript
import type { AppEntry } from '@fde-desktop/fde-core';

const MyCustomApp: AppEntry = {
  id: 'my-app',
  name: 'My App',
  icon: '🚀',
  defaultWidth: 800,
  defaultHeight: 600,
  minWidth: 400,
  minHeight: 300,
};
```

### Types

All types are exported:

```typescript
import type {
  AppEntry,
  WindowEntity,
  WindowInput,
  FSNode,
  DesktopIconInput,
  IFileSystem,
  AppRegistration,
} from '@fde-desktop/fde-core';
```

## UI Components

The package does not include UI components directly, as they depend on static assets. If you want similar components:

1. Create your own `DesktopArea` component using `useDesktopStore`
2. Create `Window` component using window management hooks
3. Create `Taskbar` and `Launcher` components

Refer to the source code at:

- `src/Presentation/Components/DesktopArea/`
- `src/Presentation/Components/Window/`
- `src/Presentation/Components/Taskbar/`
- `src/Presentation/Components/Launcher/`

## Hooks

Available hooks:

```typescript
import {
  useOpenApp, // Open an app by AppEntry
  useFdeApi, // Access FDE API (Docker)
  useNotifications, // Show notifications
  useSystemTheme, // Get system theme
  useClock, // Timer/clock
  useContextMenu, // Context menu management
  useDeviceDetection, // Device info
  useDownload, // File download
  useCustomAppHMR, // Hot module replacement (dev)
} from '@fde-desktop/fde-core';
```

## Domain Entities

Use entity factories:

```typescript
import { createWindow, createDesktopIcon, createLauncherFolder } from '@fde-desktop/fde-core';

const window = createWindow({
  title: 'My Window',
  appId: 'my-app',
  x: 100,
  y: 100,
  width: 800,
  height: 600,
});

const icon = createDesktopIcon({
  appId: 'myapp',
  x: 50,
  y: 50,
  name: 'My App',
});
```

## Constants

Predefined constants:

```typescript
import {
  DEFAULT_WINDOW_DIMENSIONS,
  DEFAULT_THEME_COLORS,
  ICON_COLUMN_WIDTH,
  ICON_ROW_HEIGHT,
  TASKBAR_HEIGHT,
  DEFAULT_VIEWPORT_WIDTH,
  DEFAULT_VIEWPORT_HEIGHT,
  ANIMATION_DURATION,
} from '@fde-desktop/fde-core';
```

## i18n

The package includes i18n setup:

```typescript
import { i18n } from '@fde-desktop/fde-core';

// Use with react-i18next
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <span>{t('key')}</span>;
}
```

## Utilities

Helper functions:

```typescript
import {
  uuid, // Generate UUID
  formatBytes, // Format bytes to human-readable
  getMimeTypeFromExtension,
  getFileExtension,
  sortNodes, // Sort file nodes
  buildBreadcrumbs, // Build breadcrumb path
  isNewerVersion, // Compare version strings
  clearBrowserData, // Clear browser storage
} from '@fde-desktop/fde-core';
```

## Docker Integration

For Docker-based deployments:

```typescript
import { DockerFileSystemAdapter, FdeApiAdapter, useCustomAppHMR } from '@fde-desktop/fde-core';

// Initialize FDE API
const api = FdeApiAdapter;

// File system
const dockerFs = new DockerFileSystemAdapter();

// Hot reloading for custom apps
useCustomAppHMR();
```

## License

MIT
