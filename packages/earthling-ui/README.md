# Earthling UI

A modern, themeable React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

> **Alpha Status**: This project is in active development. APIs and features may change between releases.

## Features

- **Themeable Components**: Light and dark themes with CSS custom properties
- **Type-Safe**: Built with TypeScript for full IntelliSense support
- **Modern Stack**: React 18/19 + Tailwind CSS 4 + Radix UI primitives
- **Tree-Shakeable**: Import only the components you need
- **SSR Ready**: All components include `"use client"` directives for Next.js App Router
- **CLI Tool**: Scaffold projects from templates (SSR, SPA, monorepo, CLI, DB)
- **Eject**: Copy component source directly into your project

## Installation

```bash
bun add earthling-ui
# or
npm install earthling-ui
```

## Components

### Form Inputs
- `Button` - Versatile button with paper, outline, and ghost materials
- `Input` - Text input field
- `TextArea` - Multi-line text input
- `Checkbox` - Accessible checkbox
- `Radio` - Radio group and radio items
- `Switch` - Toggle switch
- `Select` - Dropdown select with compound components
- `Slider` - Range slider

### Layout & Containers
- `Card` - Container for grouping related content
- `Surface` - Flexible surface with paper/glass variants
- `Table` - Data table with compound components
- `ScrollArea` - Scrollable area with custom scrollbar
- `Separator` - Visual divider
- `Tabs` - Tab interface

### Overlays
- `Dialog` - Modal dialog with form support
- `AlertDialog` - Confirmation dialog
- `Drawer` - Slide-out drawer (top/bottom/left/right)
- `Popover` - Floating popover
- `HoverCard` - Hover-activated card
- `Tooltip` - Accessible tooltip
- `DropdownMenu` - Dropdown menu with nested items
- `ContextMenu` - Right-click context menu

### Feedback & Display
- `Alert` - Alert message with severity variants
- `Badge` - Small label/tag
- `Chip` - Interactive tag
- `Avatar` - User avatar with fallback
- `Skeleton` - Loading placeholder
- `Progress` - Progress bar
- `Toast` - Toast notifications
- `Accordion` - Expandable sections
- `Collapsible` - Simple collapsible section
- `Breadcrumbs` - Navigation breadcrumb trail
- `ToggleGroup` - Button toggle group

### Variant System

Components support a consistent variant system:

- **Materials**: `paper`, `outline`, `ghost`
- **Schemes**: `primary`, `secondary`, `tertiary`, `neutral`, `muted`, `good`, `caution`, `bad`
- **Sizes**: `sm`, `md`, `lg`

## Usage

Import components individually for optimal tree-shaking:

```tsx
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
```

Or import from the barrel export:

```tsx
import { Button, Input } from "earthling-ui";
```

```tsx
function App() {
  return (
    <Button material="paper" scheme="primary" size="md">
      Click me
    </Button>
  );
}
```

## Theming

Earthling UI supports light, dark, and system themes through CSS custom properties:

```css
/* Import required styles */
@import "tailwindcss";
@import "earthling-ui";
@import "earthling-ui/theme/dark";

/* Apply themes based on data-theme attribute */
@layer base {
  :root[data-theme="dark"] {
    @apply theme-dark;
  }
  :root[data-theme="system"] {
    @media (prefers-color-scheme: dark) {
      @apply theme-dark;
    }
  }
}
```

```tsx
// Manual theme control
document.documentElement.setAttribute("data-theme", "dark"); // or 'light' or 'system'
```

## Development

This is a monorepo managed with Bun workspaces. Key packages:

- `packages/earthling-ui`: The main UI component library
- `apps/docs`: Documentation site

```bash
# Install dependencies
bun install

# Build the UI library and watch for changes
cd packages/earthling-ui
bun run dev

# Run the documentation site
cd apps/docs
bun run dev
```

## License

MIT © [Steven Frady](https://stevenfrady.com)
