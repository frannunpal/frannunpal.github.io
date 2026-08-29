import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{ct as t,lt as n}from"./iframe-ChFPAf1w.js";var r,i,a,o,s,c,l,u;e((()=>{n(),r={title:`Shared/Wiki/WikiPage`,component:t,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{onWikiLinkClick:{action:`wikiLinkClick`}}},i={args:{content:`---
title: Window Component
created: 2024-01-15
updated: 2024-01-20
type: entity
tags:
  - window
  - ui
sources:
  - raw/articles/window.md
---

# Window Component

The Window component provides a draggable and resizable container for application content.

## Overview

This component is the foundation of the FDE desktop environment. Each window can be:

- **Dragged** across the desktop area
- **Resized** from any edge or corner
- **Minimized** to the taskbar
- **Maximized** to fill the screen

## Props

| Prop | Type | Description |
|------|------|-------------|
| \`title\` | \`string\` | Window title displayed in the header |
| \`children\` | \`ReactNode\` | Content to render inside the window |
| \`initialPosition\` | \`{ x: number; y: number }\` | Starting position |

## Related

- [[desktop]] — The desktop container
- [[taskbar]] — Window management via taskbar
- [[window-manager-adapter]] — Window management implementation

## Example

\`\`\`tsx
import { Window } from '@fde-desktop/fde-core';

function MyApp() {
  return (
    <Window title="My App">
      <p>Hello, world!</p>
    </Window>
  );
}
\`\`\`

> Note: Windows automatically manage z-index ordering through the window manager.

See the [API Documentation](#api) for more details.
`,permalinks:[`window`,`desktop`,`taskbar`,`window-manager-adapter`]}},a={args:{content:`---
title: Advanced Topics
created: 2024-01-10
type: concept
tags:
  - advanced
---

# Advanced Topics

This page discusses advanced configuration options.

## Non-Existent Links

Here is a link to a [[page-that-does-not-exist]] which should appear as a "broken" link.

And another [[future-feature]] that hasn't been written yet.
`,permalinks:[`desktop`,`window`]}},o={args:{content:`---
title: State Management Comparison
created: 2024-01-05
type: comparison
tags:
  - state
  - architecture
---

# State Management Comparison

| Feature | Zustand | Redux | Jotai |
|---------|---------|-------|-------|
| Bundle size | Small | Large | Small |
| Learning curve | Low | High | Medium |
| DevTools | Good | Excellent | Good |
| TypeScript | Excellent | Good | Excellent |

## Recommendation

For FDE Desktop, we chose **Zustand** because:

1. Small bundle size
2. Excellent TypeScript support
3. Simple API
4. Built-in persist middleware

Related: [[desktop-store]] | [[settings-store]]
`,permalinks:[`desktop-store`,`settings-store`]}},s={args:{content:`---
title: State Management Analysis
created: 2024-01-20
type: query
tags:
  - state
  - analysis
---

# State Management Analysis

**Question:** What state management approach should FDE use?

## Summary

After analyzing multiple options, Zustand was selected as the primary state management solution.

## Key Findings

- Zustand provides the smallest bundle size
- TypeScript support is excellent out of the box
- Persist middleware works well with IndexedDB
- Minimal boilerplate compared to Redux

## Sources

- [[desktop-store]] — Main state container
- [[settings-store]] — User preferences
`,permalinks:[`desktop-store`,`settings-store`]}},c={args:{content:`---
title: Quick Note
created: 2024-01-20
type: concept
tags:
  - note
---

A brief note with minimal content.

Link to [[desktop]].
`,permalinks:[`desktop`]}},l={args:{content:``,permalinks:[]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`---
title: Window Component
created: 2024-01-15
updated: 2024-01-20
type: entity
tags:
  - window
  - ui
sources:
  - raw/articles/window.md
---

# Window Component

The Window component provides a draggable and resizable container for application content.

## Overview

This component is the foundation of the FDE desktop environment. Each window can be:

- **Dragged** across the desktop area
- **Resized** from any edge or corner
- **Minimized** to the taskbar
- **Maximized** to fill the screen

## Props

| Prop | Type | Description |
|------|------|-------------|
| \\\`title\\\` | \\\`string\\\` | Window title displayed in the header |
| \\\`children\\\` | \\\`ReactNode\\\` | Content to render inside the window |
| \\\`initialPosition\\\` | \\\`{ x: number; y: number }\\\` | Starting position |

## Related

- [[desktop]] — The desktop container
- [[taskbar]] — Window management via taskbar
- [[window-manager-adapter]] — Window management implementation

## Example

\\\`\\\`\\\`tsx
import { Window } from '@fde-desktop/fde-core';

function MyApp() {
  return (
    <Window title="My App">
      <p>Hello, world!</p>
    </Window>
  );
}
\\\`\\\`\\\`

> Note: Windows automatically manage z-index ordering through the window manager.

See the [API Documentation](#api) for more details.
\`,
    permalinks: ['window', 'desktop', 'taskbar', 'window-manager-adapter']
  }
}`,...i.parameters?.docs?.source},description:{story:`Basic wiki page with frontmatter and content`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`---
title: Advanced Topics
created: 2024-01-10
type: concept
tags:
  - advanced
---

# Advanced Topics

This page discusses advanced configuration options.

## Non-Existent Links

Here is a link to a [[page-that-does-not-exist]] which should appear as a "broken" link.

And another [[future-feature]] that hasn't been written yet.
\`,
    permalinks: ['desktop', 'window']
  }
}`,...a.parameters?.docs?.source},description:{story:`A wiki page that contains broken links (links to non-existent pages)`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`---
title: State Management Comparison
created: 2024-01-05
type: comparison
tags:
  - state
  - architecture
---

# State Management Comparison

| Feature | Zustand | Redux | Jotai |
|---------|---------|-------|-------|
| Bundle size | Small | Large | Small |
| Learning curve | Low | High | Medium |
| DevTools | Good | Excellent | Good |
| TypeScript | Excellent | Good | Excellent |

## Recommendation

For FDE Desktop, we chose **Zustand** because:

1. Small bundle size
2. Excellent TypeScript support
3. Simple API
4. Built-in persist middleware

Related: [[desktop-store]] | [[settings-store]]
\`,
    permalinks: ['desktop-store', 'settings-store']
  }
}`,...o.parameters?.docs?.source},description:{story:`Wiki page with comparison tables`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`---
title: State Management Analysis
created: 2024-01-20
type: query
tags:
  - state
  - analysis
---

# State Management Analysis

**Question:** What state management approach should FDE use?

## Summary

After analyzing multiple options, Zustand was selected as the primary state management solution.

## Key Findings

- Zustand provides the smallest bundle size
- TypeScript support is excellent out of the box
- Persist middleware works well with IndexedDB
- Minimal boilerplate compared to Redux

## Sources

- [[desktop-store]] — Main state container
- [[settings-store]] — User preferences
\`,
    permalinks: ['desktop-store', 'settings-store']
  }
}`,...s.parameters?.docs?.source},description:{story:`Query result page`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`---
title: Quick Note
created: 2024-01-20
type: concept
tags:
  - note
---

A brief note with minimal content.

Link to [[desktop]].
\`,
    permalinks: ['desktop']
  }
}`,...c.parameters?.docs?.source},description:{story:`Minimal wiki page without much content`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: '',
    permalinks: []
  }
}`,...l.parameters?.docs?.source},description:{story:`Empty wiki page (edge case)`,...l.parameters?.docs?.description}}},u=[`Basic`,`WithBrokenLinks`,`Comparison`,`QueryResult`,`Minimal`,`Empty`]}))();export{i as Basic,o as Comparison,l as Empty,c as Minimal,s as QueryResult,a as WithBrokenLinks,u as __namedExportsOrder,r as default};