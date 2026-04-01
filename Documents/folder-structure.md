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
├── Shared/                # Shared code
│   ├── Constants/         # Global constants
│   ├── Interfaces/        # TypeScript contracts
│   ├── Styles/           # Global CSS
│   ├── Testing/          # Test utilities
│   ├── Types/            # Utility types
│   └── Utils/            # Utility functions
├── App.tsx                # Root component
├── main.tsx               # React entry point
└── index.css              # Global styles
```

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
└── Adapters/
    ├── DefaultThemeProvider.ts     # Theme provider
    ├── IndexedDBFileSystem.ts      # FS persistence (IndexedDB, default)
    ├── IndexedDBBlobStore.ts       # Blob storage with idb:// URL scheme
    ├── LocalStorageFileSystem.ts   # Legacy FS persistence (localStorage)
    ├── MantineThemeAdapter.ts      # Mantine adapter
    ├── WindowManagerAdapter.ts     # Window manager
    └── i18n.ts                     # Internationalization config
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
│   ├── apps.ts             # Available apps registry (APPS array, DEFAULT_WINDOW_DIMENSIONS)
│   ├── launcherFolders.ts  # Predefined launcher folders (Social Links, Office, Programming, Games)
│   ├── profileData.ts      # Personal profile data (PROFILE, EXPERIENCE, SKILLS)
│   ├── Animations.ts       # Framer Motion variants (window animations)
│   ├── Colors.ts           # Color palette
│   ├── Fonts.ts            # Font stacks and Google Fonts URLs
│   └── Icons.ts            # Icon mappings
│
├── Locales/                # Translation files
│   ├── en/                 # English translations
│   │   ├── common.json     # Common UI strings
│   │   ├── apps.json       # App names and descriptions
│   │   ├── settings.json   # Settings sections
│   │   ├── window.json     # Window-related strings
│   │   ├── contextMenu.json # Context menu strings
│   │   ├── notifications.json # Notification strings
│   │   ├── welcome.json    # Welcome app strings
│   │   └── notes.json      # Notes app strings
│   └── es/                 # Spanish translations
│       └── ...             # Same structure as en/
│
├── Interfaces/
│   ├── AppEntry.ts         # App interface (id, name, icon, fcIcon, dimensions)
│   ├── IDesktopIcon.ts     # Desktop icon entity interface (DesktopIconEntity)
│   ├── FileNode.ts         # File node interface
│   ├── FolderNode.ts       # Folder node interface
│   ├── FileSystemNode.ts   # Base FS node interface
│   ├── IDesktopState.ts    # Complete desktop state
│   ├── IFileSystem.ts      # File system interface
│   ├── IWindowManager.ts   # Window manager interface
│   ├── IThemeProvider.ts   # Theme provider interface
│   ├── ISettingsState.ts   # Settings state (wallpaper, font, theme, custom colors)
│   ├── IWindowContentProps.ts # WindowContentProps, MenuBarBuilder, MenuBarComponentProps
│   ├── IAppMenuElement.ts  # Menu bar element types
│   ├── WindowEntity.ts     # Window entity with contentData
│   └── ... (others)
│
├── Styles/
│   └── variables.css       # Global CSS variables
│
├── Testing/
│   ├── __mocks__/          # Global mocks
│   │   ├── framer-motion.mock.tsx
│   │   ├── i18n.mock.ts    # i18n mock with real translations for tests
│   │   ├── jsdom-setup.tsx
│   │   ├── localStorage.mock.ts
│   │   └── react-rnd.mock.tsx
│   └── Utils/
│       ├── makeWindow.ts        # Helper for creating windows in tests
│       ├── makeWindowInput.ts   # Input for creating windows
│       ├── makeWindowEntity.ts  # Mock window entity factory
│       ├── resetDesktopStore.ts # Store reset for tests
│       ├── launcherHelpers.ts   # E2E helpers for launcher (open, search, openAppFromLauncher)
│       ├── renderWithMantine.tsx # Render with Mantine provider
│       ├── renderApp.ts         # Render a full app component with all providers
│       ├── setupDesktopTest.ts  # Composite test setup (mocks + store reset)
│       ├── testHelpers.ts       # Store-level test helpers (createTestFileState, etc.)
│       ├── testFactories.ts     # Factory functions for FileNode, FolderNode, DesktopIconEntity
│       └── windowHelpers.ts     # Playwright helpers (closeDefaultWelcomeWindow, etc.)
│
├── Types/
│   ├── DesktopIconTypes.ts
│   ├── FileSystemTypes.ts
│   └── WindowTypes.ts
│
└── Utils/
    ├── getFileExtension.ts  # Extract file extension
    ├── sortNodes.ts         # Sort file/folder nodes
    ├── buildBreadcrumbs.ts  # Build breadcrumb paths
    ├── getFourRandomColors.ts # Generate random colors
    ├── getAppIdForMime.ts   # Map MIME types to app IDs
    ├── hashBlob.ts          # SHA-256 hash for blob deduplication
    ├── formatBytes.ts       # Format byte sizes (B, KB, MB, GB)
    ├── getMimeTypeFromExtension.ts # Infer MIME type from file extension
    ├── getRuntime.ts        # Runtime detection (getRuntime, isDocker, isBrowser, isElectron, isDev)
    ├── isNewerVersion.ts    # Semver comparison for update detection
    ├── clearBrowserData.ts  # Clear all browser data (SW, Cache, IndexedDB, localStorage)
    ├── uuid.ts              # UUID generator (wraps uuid v4)
    ├── waitForContainer.ts  # Poll for a DOM element to appear by ID
    └── resetDockerWorkspace.ts # POST /api/fs/reset (Docker only)
```

## Where to Find Common Things

| What you're looking for     | Where it is                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| How to register a new app   | `src/Shared/Constants/apps.ts`                                       |
| Profile data (for Welcome)  | `src/Shared/Constants/profileData.ts`                                |
| Menu bar builders           | `src/Presentation/Components/Apps/*/build*MenuBar.tsx`               |
| App registry                | `src/Presentation/Components/Window/AppRegistry.tsx`                 |
| The main store              | `src/Presentation/Store/desktopStore.ts`                             |
| Settings store              | `src/Presentation/Store/settingsStore.ts`                            |
| Temp memory store           | `src/Presentation/Store/AppTempMemory.ts`                            |
| i18n configuration          | `src/Infrastructure/i18n.ts`                                         |
| Translation files           | `src/Shared/Locales/`                                                |
| Window component            | `src/Presentation/Components/Window/Window.tsx`                      |
| Hook for opening apps       | `src/Presentation/Hooks/useOpenApp.ts`                               |
| Hook for tracking changes   | `src/Presentation/Hooks/useIsDirty.ts`                               |
| Hook for closing intercepts | `src/Presentation/Hooks/useCloseInterceptor.tsx`                     |
| File picker modal           | `src/Presentation/Components/Shared/FilePickerApp/FilePickerApp.tsx` |
| Theme (colors)              | `src/Infrastructure/Adapters/DefaultThemeProvider.ts`                |
| File system (default)       | `src/Infrastructure/Adapters/IndexedDBFileSystem.ts`                 |
| Blob store                  | `src/Infrastructure/Adapters/IndexedDBBlobStore.ts`                  |
| File system (legacy)        | `src/Infrastructure/Adapters/LocalStorageFileSystem.ts`              |
| Window types                | `src/Shared/Interfaces/WindowEntity.ts`                              |
| Font constants              | `src/Shared/Constants/Fonts.ts`                                      |
| Global styles               | `src/index.css` and `src/Shared/Styles/variables.css`                |

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
