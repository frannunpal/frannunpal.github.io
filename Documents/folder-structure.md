# Folder Structure

Here's the complete breakdown of how the project is organized. You should be able to find anything without getting lost.

## Overview

```
src/
├── Domain/                # Pure entities (no dependencies)
├── Infrastructure/        # External adapters
├── Presentation/          # UI layer (React)
│   ├── Components/        # React components
│   ├── Hooks/            # Custom hooks
│   ├── Store/            # Zustand store
│   └── Utils/            # Presentation utilities
├── Server/               # Bun server (Docker mode)
│   ├── index.ts          # Server entry point
│   └── routes/           # API routes (fs, pty, hmr, codeServer)
├── Shared/                # Shared code
│   ├── Constants/         # Global constants
│   ├── Hooks/            # Shared hooks (useCustomAppHMR, useMenuBarUtils)
│   ├── Interfaces/        # TypeScript contracts
│   ├── Styles/           # Global CSS
│   ├── Testing/          # Test utilities
│   ├── Types/            # Utility types
│   └── Utils/            # Utility functions
├── packages/              # NPM packages
│   └── core/             # @fde-desktop/fde-core
├── App.tsx                # Root component
├── main.tsx               # React entry point
└── index.css              # Global styles
```

## Packages Directory (`packages/`)

The `packages/` directory contains NPM packages that can be published and used independently.

```
packages/
└── core/                    # @fde-desktop/fde-core
    ├── package.json          # Package definition
    ├── bun.lock              # Lock file
    ├── tsconfig.json         # TypeScript config
    ├── vite.config.ts        # Build config (library mode)
    ├── vitest.config.ts       # Test config
    ├── .npmignore            # Files to exclude from npm
    ├── README.md             # Package documentation
    ├── src/
    │   ├── apps/             # Exports CORE_APPS
    │   │   └── index.ts
    │   ├── components/       # (future) UI components
    │   ├── constants/        # Shared constants
    │   │   └── index.ts
    │   ├── domain/           # Domain entities
    │   │   └── index.ts
    │   ├── hooks/            # Exported hooks
    │   │   └── index.ts
    │   ├── i18n/             # i18n setup
    │   │   └── index.ts
    │   ├── infrastructure/   # Adapters
    │   │   └── index.ts
    │   ├── interfaces/       # TypeScript interfaces
    │   │   └── index.ts
    │   ├── stores/           # Zustand stores
    │   │   └── index.ts
    │   ├── types/            # Shared types
    │   │   └── index.ts
    │   ├── utils/            # Utility functions
    │   │   └── index.ts
    │   └── index.ts          # Main entry point
    └── tests/
        ├── apps.test.ts      # CORE_APPS/EXTRA_APPS tests
        ├── build.test.ts     # Build output verification
        └── exports.test.ts   # All exports verification
```

### Package Structure

| Path                 | Description                                    |
| -------------------- | ---------------------------------------------- |
| `src/apps/`          | Exports `CORE_APPS` and individual app entries |
| `src/constants/`     | `DEFAULT_WINDOW_DIMENSIONS`, theme colors, etc |
| `src/domain/`        | Entity factories: `createWindow`, etc.         |
| `src/hooks/`         | Re-exported hooks from main project            |
| `src/infrastructure/ | Adapters: `IndexedDBFileSystem`, etc.          |
| `src/interfaces/`    | TypeScript interfaces: `IFileSystem`, etc.     |
| `src/stores/`        | Zustand stores: `useDesktopStore`, etc.        |
| `src/types/`         | Shared TypeScript types                        |
| `src/utils/`         | Utility functions: `uuid`, `formatBytes`, etc. |

### CORE_APPS vs EXTRA_APPS

The package exports `CORE_APPS` (reusable apps) while `EXTRA_APPS` remain in the host app:

- **CORE_APPS**: Files, Settings, Notepad, ImageViewer, PDF, Uploader, MenuEdit, DeviceInfo, Calendar
- **EXTRA_APPS**: Welcome, Storybook, Linkedin, Github, Terminal, CodeServer, DosEmulator, Doom

See [npm-package.md](./npm-package.md) for usage details.

## Server Layer (`src/Server/`)

Bun server for Docker mode. Handles API requests and WebSocket connections.

```
Server/
├── index.ts                  # Server entry point (Bun.serve)
├── types.ts                  # Server-specific types
├── workspace.ts              # Workspace utilities
└── routes/
    ├── fs.ts                 # File system REST API
    ├── fsWatcher.ts          # File watcher for HMR
    ├── pty.ts                # PTY WebSocket (terminal)
    ├── hmr.ts                # Hot Module Replacement WebSocket
    └── codeServer.ts         # code-server management
```

**API Endpoints:**

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/fs/*` | GET/POST/DELETE | File system operations |
| `/api/runtime` | GET | Runtime info (docker, workspace, version) |
| `/api/shell` | GET | Available shells |
| `/api/pty` | WebSocket | Terminal PTY |
| `/api/hmr` | WebSocket | Hot reload for custom apps |

---

## Domain Layer (`src/Domain/`)

Pure business logic. No React, no state management, nothing. Just functions that create entities.

```
Domain/
├── Entities/
│   ├── DesktopIcon.ts      # Factory for DesktopIconEntity
│   ├── FileSystem.ts       # Factories for FileNode and FolderNode
│   ├── LauncherFolder.ts   # Factory for LauncherFolder (predefined and custom folders)
│   └── Window.ts           # Factory for WindowEntity
└── index.ts               # Public exports
```

## Infrastructure Layer (`src/Infrastructure/`)

Adapters that connect to the outside world (localStorage, browser, etc).

```
Infrastructure/
├── Adapters/
│   ├── DefaultThemeProvider.ts     # Theme provider
│   ├── FdeApiAdapter.ts            # FDE API adapter for custom apps
│   ├── IndexedDBFileSystem.ts      # FS persistence (IndexedDB, default)
│   ├── IndexedDBBlobStore.ts       # Blob storage with idb:// URL scheme
│   ├── LocalStorageFileSystem.ts   # Legacy FS persistence (localStorage)
│   ├── MantineThemeAdapter.ts      # Mantine adapter
│   ├── WindowManagerAdapter.ts     # Window manager
│   └── i18n.ts                     # Internationalization config
├── Loaders/
│   └── jsDosLoader.ts              # DOS emulator loader
└── Migration/
    ├── migrateStorage.ts           # Storage migration utilities
    └── migrateStorage.test.ts
```

## Presentation Layer (`src/Presentation/`)

```
Presentation/
├── Components/
│   ├── Apps/               # Desktop apps
│   │   ├── CalendarApp/    # Calendar app
│   │   ├── DeviceInfoApp/  # Device info display (always on top)
│   │   ├── FilesApp/       # File explorer
│   │   ├── GithubApp/      # GitHub link app
│   │   ├── ImageViewerApp/ # Image viewer with file picker
│   │   ├── LinkedinApp/    # LinkedIn link app
│   │   ├── MenuEditApp/    # Manage launcher folders (create, rename, delete, drag apps)
│   │   ├── NotesApp/       # Markdown editor (Notepad)
│   │   ├── PdfApp/         # PDF viewer
│   │   ├── SettingsApp/    # Settings app (appearance, launcher, font, reset)
│   │   │   └── sections/   # Settings sections (Appearance, Font, Reset, etc.)
│   │   ├── StorybookApp/   # Storybook viewer
│   │   ├── TerminalApp/    # xterm.js terminal emulator (Docker only)
│   │   ├── CodeServerApp/  # VS Code in browser via code-server (Docker only)
│   │   ├── UploaderApp/    # File upload wizard
│   │   ├── DosEmulatorApp/ # DOS game emulator (js-dos)
│   │   ├── WelcomeApp/     # Personal portfolio app
│   │   │   └── components/ # Hero, Skills, Experience, TechTags components
│   │   └── ImageViewerApp/, NotesApp/, SettingsApp/ # Menu bar builders
│   ├── AppMenuBar/         # Menu bar component for apps
│   ├── ContextMenu/        # Context menu
│   ├── DesktopArea/        # Main desktop area
│   ├── DesktopIcon/        # Desktop icons
│   ├── Launcher/           # Start menu (settings sections: Appearance, Font, Wallpaper)
│   ├── Shared/             # Reusable components
│   │   ├── AppEmptyState/  # Empty state for apps
│   │   ├── AppIcon/        # App icon
│   │   ├── AppLoading/     # Loading component for lazy-loaded apps
│   │   ├── BiIcon/         # BoxIcons loader component
│   │   ├── CollapsibleSection/ # Collapsible folder/app sections
│   │   ├── CreateItemApp/  # Create files/folders modal
│   │   ├── DirtyIndicator/ # Unsaved changes indicator
│   │   ├── ExternalLinkApp/# Reusable external link app component
│   │   ├── FilePickerApp/  # File picker and save modals
│   │   ├── FolderPicker/   # Folder picker modal with tree, breadcrumbs, and grid
│   │   ├── LanguageFlag/   # SVG flag components for language selection
│   │   ├── SettingsSection/# Reusable settings section wrapper
│   │   ├── VscIcon/        # VSCode icon wrapper component
│   │   └── IconColorPicker/ # Color picker
│   ├── SystemTray/         # System tray
│   ├── Taskbar/            # Taskbar with window buttons
│   ├── TaskbarContextMenu/ # Right-click menu (minimize, maximize, restore, close)
│   └── Window/             # Draggable/resizable window
│       ├── AppRegistry.tsx # Central app registration
│       ├── AppReadyContext.tsx # Context for notifyReady
│       └── useAppReady.ts  # Hook to access context
│
├── Hooks/                  # Custom hooks (see hooks.md for full list)
│   ├── useOpenApp.ts       # Open apps
│   ├── useClock.ts         # Format current time
│   ├── useSystemTheme.ts   # Detect/change system theme
│   ├── useFcIcon.ts        # Load react-icons/fc icons
│   ├── useDynamicIcon.ts   # Generic icon loader (used by useFcIcon, useFiIcon, useVscIcon)
│   ├── useFiIcon.ts        # Load react-icons/fi icons
│   ├── useVscIcon.ts       # Load react-icons/vsc icons
│   ├── useResolvedUrl.ts   # Resolve idb:// URLs to blob URLs
│   ├── useNotifications.ts # System notifications
│   ├── useContextMenu.ts   # Local context menus
│   ├── useAppUpdate.ts     # Version update detection
│   ├── useWindowButtonRegistry.ts # Taskbar button positions
│   ├── useDownload.ts      # Streaming downloads with progress
│   ├── useApplyFont.ts     # Apply font globally
│   ├── useIsDirty.ts       # Track unsaved changes
│   ├── useCloseInterceptor.tsx # Intercept window close for dirty state
│   ├── useLanguageSync.ts  # Sync store language with i18next
│   ├── useAppName.ts       # Get translated app name by ID
│   ├── useFolderName.ts    # Translate predefined folder names
│   ├── useTaskbarHeight.ts # Measure context menu height
│   ├── useSearchFilter.ts  # Generic search filtering
│   ├── useCollapsible.ts   # Manage expand/collapse state
│   └── useDragDrop/        # Drag & drop system (useDraggableItem, useDroppableArea, etc.)
│
├── Store/
│   ├── desktopStore.ts     # Main desktop state (windows, icons, fs)
│   ├── settingsStore.ts    # User settings (theme, wallpaper, font)
│   ├── closeModalStore.ts  # Close confirmation dialogs
│   ├── AppTempMemory.ts    # Temporary snapshots for useIsDirty
│   └── factories/
│       └── createWindowStateStore.ts  # Factory for window-scoped state
│
└── Utils/
    └── (presentation utilities)
```

## Shared Layer (`src/Shared/`)

Code used across multiple layers. Types, interfaces, constants, utilities.

```
Shared/
├── Constants/
│   ├── appIds.ts            # App ID constants and mappings
│   ├── apps.ts              # Combined APPS array (coreApps + extraApps)
│   ├── breakpoints.ts       # Responsive breakpoints
│   ├── coreApps.ts          # Core apps (exported in @fde-desktop/fde-core)
│   ├── customApps.ts        # Custom apps registry (Docker)
│   ├── electron.ts          # Electron detection constants
│   ├── extraApps.ts         # Extra apps (host app only)
│   ├── launcherFolders.ts   # Predefined launcher folders
│   ├── layout.ts            # Layout constants
│   ├── profileData.ts       # Personal profile data
│   ├── themeColors.ts       # Theme color defaults
│   ├── version.ts           # App version
│   ├── Animations.ts        # Framer Motion variants
│   ├── Colors.ts            # Color palette
│   ├── Fonts.ts             # Font stacks and Google Fonts URLs
│   └── Icons.ts             # Icon mappings
│
├── Hooks/
│   ├── useCustomAppHMR.ts   # Hot reload for custom apps (Docker)
│   └── useMenuBarUtils.ts   # Menu bar utilities
│
├── Locales/
│   ├── en/                  # English translations
│   │   ├── common.json
│   │   ├── apps.json
│   │   ├── settings.json
│   │   ├── window.json
│   │   ├── contextMenu.json
│   │   ├── notifications.json
│   │   ├── welcome.json
│   │   └── notes.json
│   └── es/                  # Spanish translations
│
├── Interfaces/
│   ├── AppEntry.ts          # App interface
│   ├── IDesktopIcon.ts      # Desktop icon entity
│   ├── FileNode.ts          # File node interface
│   ├── FolderNode.ts        # Folder node interface
│   ├── FileSystemNode.ts    # Base FS node interface
│   ├── IDesktopState.ts     # Complete desktop state
│   ├── IFileSystem.ts       # File system interface
│   ├── IWindowManager.ts    # Window manager interface
│   ├── IThemeProvider.ts    # Theme provider interface
│   ├── ISettingsState.ts    # Settings state
│   ├── IWindowContentProps.ts
│   ├── IAppMenuElement.ts   # Menu bar element types
│   ├── WindowEntity.ts      # Window entity with contentData
│   └── ... (others)
│
├── Styles/
│   └── variables.css        # Global CSS variables
│
├── Testing/
│   ├── __mocks__/           # Global mocks (framer-motion, i18n, react-rnd)
│   ├── Storybook/           # Storybook configuration
│   ├── Types/               # Test type utilities
│   └── Utils/               # Test utilities
│       ├── makeWindow.ts
│       ├── makeWindowEntity.ts
│       ├── resetDesktopStore.ts
│       ├── launcherHelpers.ts
│       ├── renderWithMantine.tsx
│       ├── renderApp.ts
│       ├── setupDesktopTest.ts
│       ├── testHelpers.ts
│       ├── testFactories.ts
│       ├── windowHelpers.ts
│       └── AppWithPickerOpen.tsx
│
├── Types/
│   ├── DesktopIconTypes.ts
│   ├── FileSystemTypes.ts
│   ├── WindowTypes.ts
│   └── FdeApi.ts            # FDE API types for custom apps
│
└── Utils/
    ├── buildBreadcrumbs.ts      # Build breadcrumb paths
    ├── clearBrowserData.ts      # Clear all browser data
    ├── formatBytes.ts           # Format byte sizes
    ├── getAppIdForMime.ts       # Map MIME types to app IDs
    ├── getBaseUrl.ts            # Get base URL for API calls
    ├── getFileExtension.ts      # Extract file extension
    ├── getFourRandomColors.ts   # Generate random colors
    ├── getMimeTypeFromExtension.ts
    ├── getRuntime.ts            # Runtime detection
    ├── hashBlob.ts              # SHA-256 hash for blob deduplication
    ├── isNewerVersion.ts        # Semver comparison
    ├── resetDockerWorkspace.ts  # Reset Docker workspace
    ├── sortNodes.ts             # Sort file/folder nodes
    ├── uuid.ts                  # UUID generator
    └── waitForContainer.ts      # Poll for DOM element
```

## Where to Find Common Things

| What you're looking for       | Where it is                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| How to register a new app     | `src/Shared/Constants/apps.ts`                                       |
| Custom apps (Docker)          | `src/Shared/Constants/customApps.ts`                                 |
| Profile data (for Welcome)    | `src/Shared/Constants/profileData.ts`                                |
| Menu bar builders             | `src/Presentation/Components/Apps/*/build*MenuBar.tsx`               |
| App registry                  | `src/Presentation/Components/Window/AppRegistry.tsx`                 |
| The main store                | `src/Presentation/Store/desktopStore.ts`                             |
| Settings store                | `src/Presentation/Store/settingsStore.ts`                            |
| Custom apps store             | `src/Presentation/Store/customAppStore.ts`                           |
| Temp memory store             | `src/Presentation/Store/AppTempMemory.ts`                             |
| i18n configuration            | `src/Infrastructure/Adapters/i18n.ts`                                |
| Translation files             | `src/Shared/Locales/`                                                |
| Server entry point            | `src/Server/index.ts`                                                 |
| Server API routes             | `src/Server/routes/`                                                 |
| FDE API adapter               | `src/Infrastructure/Adapters/FdeApiAdapter.ts`                       |
| Storage migration             | `src/Infrastructure/Migration/migrateStorage.ts`                      |
| Window component              | `src/Presentation/Components/Window/Window.tsx`                      |
| Custom app loader            | `src/Presentation/Components/Shared/CustomAppLoader/`                |
| Hook for opening apps         | `src/Presentation/Hooks/useOpenApp.ts`                               |
| Hook for tracking changes     | `src/Presentation/Hooks/useIsDirty.ts`                               |
| Hook for FDE API              | `src/Presentation/Hooks/useFdeApi.ts`                                 |
| Hook for custom app HMR       | `src/Shared/Hooks/useCustomAppHMR.ts`                                |
| File picker modal             | `src/Presentation/Components/Shared/FilePickerApp/FilePickerApp.tsx`  |
| Theme (colors)                | `src/Infrastructure/Adapters/DefaultThemeProvider.ts`                 |
| File system (default)         | `src/Infrastructure/Adapters/IndexedDBFileSystem.ts`                  |
| Blob store                    | `src/Infrastructure/Adapters/IndexedDBBlobStore.ts`                  |
| File system (legacy)          | `src/Infrastructure/Adapters/LocalStorageFileSystem.ts`               |
| Window types                  | `src/Shared/Interfaces/WindowEntity.ts`                              |
| FDE API types                 | `src/Shared/Types/FdeApi.ts`                                          |
| Font constants                | `src/Shared/Constants/Fonts.ts`                                       |
| Global styles                 | `src/index.css` and `src/Shared/Styles/variables.css`                |

## Important Root Files

| File               | What it's for         |
| ------------------ | --------------------- |
| `vite.config.ts`   | Vite config           |
| `tsconfig.json`    | TypeScript config     |
| `vitest.config.ts` | Vitest config (tests) |
| `.storybook/`      | Storybook config      |
| `eslint.config.js` | ESLint config         |
| `.prettierrc`      | Prettier config       |

## Next Step

Now that you know where everything is, check out [hooks.md](./hooks.md) to see all available hooks and what each one does.
```
