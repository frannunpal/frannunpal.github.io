# FDE Desktop Environment

![full desktop screenshot](image.png)
Since a few years back, I wanted to recreate the feeling of a real desktop inside a browser. Not just draggable divs but actual windows that behave like you expect: bring to front when clicked, minimize to a taskbar, snap to edges, etc.

Built this with React and TypeScript because I needed the type safety for the window state management. Drag and drop and resizing comes from [react-rnd](https://github.com/bokuweb/react-rnd), which saved me weeks of writing that logic from scratch also [zustand](https://github.com/pmndrs/zustand), because that's what **we** the cool guys use nowadays :D.

You can access the app RIGHT NOW(!!!) as a website hosted in **[github-pages](https://frannunpal.github.io/)** or **[Download the latest release](https://github.com/frannunpal/frannunpal.github.io/releases)** for your operating system or use the docker-compose file to deply it in a self hosted enviroment.

## What it actually does

You get a working desktop in the browser in which everything works as you expect:

- **Drag windows around** - Click the title bar, move them anywhere
- **Resize from any edge** - Just like real OS windows
- **Click to focus** - Windows stack properly with z-index
- **Minimize and restore** - They go to the taskbar, not limbo
- **Right-click menus** - Context menus that actually work
- **Desktop icons** - Double-click to open apps

It also remembers your layout and preferences, such as color mode. Close the tab, come back later—your windows are where you left them (stored in localStorage, wihtout cookies or privacy concerns, **everything you do, stays in your machine**).

## The apps it includes

I built a handful of apps to prove the system works:

- **Notepad** - Markdown editor with rich text toolbar, file picker, and save dialogs
- **File Explorer** - Browse the virtual file system with folder tree and file list
- **Image Viewer** - View images with File > Open menu
- **PDF Viewer** - View PDF documents with file picker
- **Calendar** - Calendar view
- **Settings** - Customize wallpaper, launcher icon, font, and theme colors
- **Storybook** - Storybook playground for component development
- **Terminal** - Interactive terminal (Docker mode only)
- **Vs Code server** - (Docker mode only)
- **Runs DOOM**
- **DOS Emulator** - Run DOS games via js-dos bundles

## Tech choices

I picked these tools because I've never used many of them before and they don't fight each other (AFAIK):

| What              | Why                                                    |
| ----------------- | ------------------------------------------------------ |
| **React 19**      | Latest React with improved concurrent features         |
| **TypeScript**    | Window state is complex—types catch bugs               |
| **react-rnd**     | 170k downloads/week, handles the hard drag/resize math |
| **Zustand**       | State management without the boilerplate               |
| **Mantine v9**    | Good-looking components out of the box                 |
| **Framer Motion** | Animations that don't tank performance                 |

## Architecture

I went with hexagonal ("ports and adapters") just in case I want to be able to swap implementations later. The core logic lives in Domain/Application layers with zero React dependencies. React only exists in the Presentation layer.

```
Domain (pure logic)
  ↓
Application (ports + use cases)
  ↓
Infrastructure (react-rnd adapter, localStorage)
  ↓
Presentation (React components)
```

This means I could theoretically port this to Vue or even native desktop without touching the business logic. Probably won't, but I _could_.

## Quick start

```bash
git clone https://github.com/frannunpal/fde-desktop.git
cd fde-desktop
bun install
bun run dev
```

Goes live on `http://localhost:5173`.

## How to use it

**Window controls:**

- Drag: Grab the title bar
- Resize: Any edge or corner
- Focus: Just click anywhere on the window
- Minimize: Hit the \_ button (goes to taskbar)
- Close: X button or right-click → close

## Current state

It's a solid proof-of-concept with production-like patterns. Here's where we are:

- [x] Project scaffolding done
- [x] Core domain entities (Window, DesktopIcon, FileSystem)
- [x] Application layer (ports + use cases)
- [x] Infrastructure adapters (WindowManagerAdapter, LocalStorageFileSystem, DefaultThemeProvider)
- [x] Multiple Zustand stores with localStorage persistence (desktop, settings, close modal)
- [x] ESLint + Prettier configured
- [x] Unit tests passing (Vitest + React Testing Library)
- [x] UI components (Mantine + Framer Motion)
- [x] Centralized app registry with menu bar support
- [x] File picker and save dialogs
- [x] Custom font system with Google Fonts integration
- [x] Streaming download hook with progress tracking
- [x] Taskbar context menu (minimize, maximize, restore, close)
- [x] Internationalization (i18n) with English and Spanish support
- [x] E2E and visual tests
- [x] Lazy loading
- [x] "Uploader" app (Since everything stays locally in your machine, it only adds the files you select to the desktop)
- [x] Launcher with folders and an editor
- [x] Fully fledged Settings panel
- [x] Drag and drop support for launcher folders
- [x] Terminal app (Docker mode only - connects to real PTY)
- [x] Dynamic apps architecture (load external apps at runtime)
- [x] Docker Images and full filesystem support
- [ ] Mobile/touch support

## Contributing

If you actually want to work on this:

1. Fork it
2. Make a branch (`git checkout -b fix-whatever`)
3. Commit (`git commit -m "Fix whatever"`)
4. Push and open a PR

No bureaucratic process. Just make sure `bun run lint` and `bun run test:all` pass.

## FAQ

> - That's cool and all but, can it run doom?

Of course!

## License

Apache 2.0 with restrictions.

## Things I stole ideas from

- [react-rnd](https://github.com/bokuweb/react-rnd) - Literally couldn't have built this without it
- [Alistair Cockburn's Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) - Made me think harder about code organization
- [Mantine](https://mantine.dev/) - Made it look okay without design skills
- [Wallpaper 1](https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-jplenio-1103970.jpg&fm=jpg&w=5363&h=3575)
- [Wallpaper 2](https://www.pexels.com/photo/multicolored-abstract-painting-1509534/)
- [DOOM Shareware](https://doomwiki.org/wiki/Shareware)
- [DOOM Icon](https://www.deviantart.com/thedoctor45/art/Doom-Custom-Icon-211290891)

---

Built partly out of curiosity, partly to see if I could. React + TypeScript. That's it.

## 📸 Visual Testing

This project includes **visual testing with Playwright** to detect UI regressions..

### run visual tests

```bash
bun run test:visual
```

### See ful docs

Read [VISUAL_TESTING.md](./VISUAL_TESTING.md) for more details.

### Available scripts

- `bun run test:visual` - Run visual tests
- `bun run test:visual:update` - Update snapshots
- `bun run test:visual:ui` - Interactive mode
- `bun run test:visual:debug` - Debug tests
- `bun run test:visual:report` - See HTML report
