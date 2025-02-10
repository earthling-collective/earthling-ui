# Earthling UI

A modern, themeable React component library built with TypeScript, Tailwind CSS, and a suite of CLI tools to scaffold projects quickly.

> ⚠️ **Alpha Status**: This project is in active development. APIs and features may change between releases.

## Features

- 🎨 **Themeable Components**: Switch between light and dark themes effortlessly.
- 🔧 **Type-Safe**: Built with TypeScript for an excellent developer experience.
- 📦 **Modern Stack**: React + Tailwind CSS + Radix UI primitives.
- 🎯 **Flexible Templates**: Create new projects from a variety of templates:
  - **ssr** – Server-side rendered applications (scaffolded under `apps/*`)
  - **spa** – Single-page applications (scaffolded under `apps/*`)
  - **db** – Package projects (scaffolded under `packages/*`)
  - **cli** – Package projects (scaffolded under `packages/*`)
  - **monorepo** – Full repository setups at the root
- 🛠 **CLI Tool**: Quickly scaffold projects using our CLI commands.
- 💡 **Additional Commands**:
  - **Eject** components to integrate them directly into your project.
  - **Copy** component snippets directly to your clipboard.

## Installation

Install Earthling UI via Bun:

```bash
bun add earthling-ui
```

## Components

Current components:

- `Button`: Versatile button with filled, outline, and ghost variants
- `Card`: Container component for grouping related content
- `Input`: Text input field with various states and validation
- `Textarea`: Multi-line text input
- `ThemeSwitcher`: Toggle between light and dark themes

Each component supports:

- Variants: filled, outline, ghost
- Sizes: sm, md, lg
- Color schemes: default, primary, secondary, good, bad

## Usage

```tsx
import { Button } from "earthling-ui/button";

function App() {
  return (
    <div>
      <Button material="filled" scheme="primary" size="md">
        Click me
      </Button>
    </div>
  );
}
```

## Theming

Earthling UI supports light, dark, and system themes through data attributes:

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
- `apps/pwa`: Demo/documentation site (work in progress)

```bash
# Install dependencies
bun install

# Build the UI library and watch for changes
cd packages/earthling-ui
bun run dev

# Run the demo site
cd apps/pwa
bun run dev
```

## License

MIT © [Steven Frady](https://stevenfrady.com)
