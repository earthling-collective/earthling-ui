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

## CLI Tool

The package includes a CLI tool for common tasks:

```bash
# Install globally
bun add -g earthling-ui

# Or run with bunx
bunx earthling-ui [command]
```

## Development

To build the library locally:

```bash
# Install dependencies
bun install

# Build the library
bun run build
```

## Contributing

This project is in alpha. While we welcome feedback and suggestions, the API is still evolving. Please open an issue on GitHub to discuss major changes.
