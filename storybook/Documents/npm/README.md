# @fde-desktop/fde-core — npm Package Docs

`@fde-desktop/fde-core` is the core library extracted from fde-desktop. It gives you everything needed to build your own browser-based desktop environment: state management, domain entities, hooks, utilities, types, and a set of ready-to-use built-in apps.

**Published at:** https://www.npmjs.com/package/@fde-desktop/fde-core

## Contents

| Document                                         | Description                                             |
| ------------------------------------------------ | ------------------------------------------------------- |
| [getting-started.md](./getting-started.md)       | Full tutorial: build a desktop app from zero            |
| [api-reference.md](./api-reference.md)           | Complete reference for all exports                      |

## What's in the package

| Category        | What you get                                                          |
| --------------- | --------------------------------------------------------------------- |
| **Apps**        | 9 built-in core apps (Files, Settings, Notepad, PDF, Image Viewer…)   |
| **Stores**      | Zustand stores: desktop state, settings, custom apps, temp memory     |
| **Hooks**       | 25+ hooks for opening apps, notifications, icons, file system…         |
| **Domain**      | Entity factories: `createWindow`, `createDesktopIcon`, etc.           |
| **Types**       | Full TypeScript types for everything                                  |
| **Utils**       | UUID, formatBytes, runtime detection, MIME helpers, breadcrumbs…      |
| **Constants**   | Layout, theme colors, animation variants, font stacks…                |
| **i18n**        | Pre-configured react-i18next instance (en + es)                       |
| **Infra**       | `IndexedDBFileSystem`, `DockerFileSystemAdapter`, `FdeApiAdapter`     |

## What's NOT in the package

The package exports **logic, state, and types only**. It does not export UI components (Window, Taskbar, Launcher, DesktopArea). Those depend on static assets specific to the host application.

To build the UI, use the hooks and stores from this package and refer to the source of the main repo for reference implementations:

- `src/Presentation/Components/Window/`
- `src/Presentation/Components/Taskbar/`
- `src/Presentation/Components/Launcher/`
- `src/Presentation/Components/DesktopArea/`

## Quick install

```bash
npm install @fde-desktop/fde-core
# peer deps
npm install react react-dom
```

Peer dependencies: `react ^19.0.0`, `react-dom ^19.0.0`
