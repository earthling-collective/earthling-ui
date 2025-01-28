# Earthling UI

A modern, themeable React component library built with TypeScript and Tailwind CSS.

> ⚠️ **Alpha Status**: This project is in active development. APIs may change between minor versions.

## Features

- 🎨 **Themeable Components**: Includes light and dark themes out of the box
- 🔧 **Type-Safe**: Built with TypeScript for excellent developer experience
- 📦 **Modern Stack**: React + Tailwind CSS + Radix UI primitives
- 🎯 **Variant Support**: Flexible component variants using class-variance-authority
- 💪 **Accessible**: Built on top of Radix UI primitives for robust accessibility

## Installation

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
import { ThemeSwitcher } from "earthling-ui/theme-switcher";

function App() {
  return (
    <div>
      <Button variant="filled" scheme="primary" size="md">
        Click me
      </Button>
      <ThemeSwitcher />
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

Use the `ThemeSwitcher` component to toggle between themes, or manually set the data-theme attribute:

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

# Build the UI library
cd packages/earthling-ui
bun run build

# Run the demo site
cd apps/pwa
bun run dev
```

## License

MIT © [Steven Frady](https://stevenfrady.com)
