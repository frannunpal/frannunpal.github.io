# fde-desktop Documentation

This directory contains comprehensive documentation for the fde-desktop project.

## Architecture & Guides

| Document                                     | Description                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------- |
| [architecture.md](./architecture.md)         | Complete architecture overview: layers, components, data flow, state management |
| [folder-structure.md](./folder-structure.md) | How the code is organized on disk                                               |
| [hooks.md](./hooks.md)                       | Custom React hooks reference                                                    |
| [i18n.md](./i18n.md)                         | Internationalization setup and usage                                            |
| [runtime-flags.md](./runtime-flags.md)       | Runtime detection flags (`__FDE_IN_DOCKER__`, `__IS_DEV__`)                     |

## Docker & Deployment

| Document                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| [docker/README.md](./docker/README.md)                     | Quick start, profiles, environment variables               |
| [docker/architecture.md](./docker/architecture.md)         | Multi-stage builds, runtime detection, hybrid architecture |
| [docker/development.md](./docker/development.md)           | Development workflow with Docker                           |
| [docker/production.md](./docker/production.md)             | Production deployment (supervisord hybrid)                 |
| [docker/apps-development.md](./docker/apps-development.md) | Developing user apps in production                         |
| [docker/troubleshooting.md](./docker/troubleshooting.md)   | Common Docker issues and solutions                         |
| [docker/testing.md](./docker/testing.md)                   | Docker integration testing guide                           |

## App Development

| Document                                                                                             | Description                                               |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [custom-apps.md](./custom-apps.md)                                                                   | How to create standalone apps that run inside fde-desktop |
| [how-to-create-an-app.md](./how-to-create-an-app.md)                                                 | Step-by-step guide to create built-in apps                |
| [how-to-add-menubar-and-file-picker-to-an-app.md](./how-to-add-menubar-and-file-picker-to-an-app.md) | Adding menu bars and file pickers to apps                 |
| [terminal-app.md](./terminal-app.md)                                                                 | Terminal app architecture (xterm.js + WebSocket PTY)      |
| [adding-games-to-dos-emulator.md](./adding-games-to-dos-emulator.md)                                 | Adding DOS games to the emulator                          |

## Quick Start

1. **Understanding the architecture**: Start with [architecture.md](./architecture.md)
2. **Running in Docker**: See [docker/README.md](./docker/README.md)
3. **Creating an app**: Follow [how-to-create-an-app.md](./how-to-create-an-app.md)
4. **Adding custom apps**: Read [custom-apps.md](./custom-apps.md)

## Key Concepts

### Hexagonal Architecture

The project follows the Ports & Adapters pattern:

```
Domain (entities)
    ↓
Application (ports/interfaces)
    ↓
Infrastructure (adapters)
    ↓
Presentation (React components)
```

### Runtime Detection

The framework detects where it's running:

- **Browser**: Standard web browser (IndexedDB filesystem)
- **Docker**: Container environment (API filesystem)
- **Electron**: Desktop app (Node.js filesystem)

### State Management

Multiple Zustand stores with persistence:

- `desktopStore`: Windows, icons, clipboard
- `settingsStore`: User preferences, theme, fonts
- `closeModalStore`: Close confirmation dialogs

### Internationalization

Supported languages:

- English (en) - default
- Spanish (es)

See [i18n.md](./i18n.md) for translation guidelines.
