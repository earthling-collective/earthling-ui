# Earthling UI

A modern, themeable React component library built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Themeable Components**: Includes light and dark themes out of the box
- 🔧 **Type-Safe**: Built with TypeScript for excellent developer experience
- 📦 **Modern Stack**: React + Tailwind CSS + Radix UI primitives
- 🎯 **Variant Support**: Flexible component variants using class-variance-authority
- 🚀 **Easy Setup**: Quick start with create-earthling-app
- 💪 **Accessible**: Built on top of Radix UI primitives for robust accessibility

## Installation

```bash
# Create a new project
npm create earthling-app@latest

# Or add to existing project
npm install earthling-ui
```

## Components

The library includes essential UI components like:

- Button (with filled, outline, and ghost variants)
- Card
- Input
- Textarea
- Link
- More coming soon...

Each component supports multiple variants, sizes, and color schemes including:

- Variants: filled, outline, ghost
- Sizes: sm, md, lg
- Color schemes: default, primary, secondary, good, bad

## Usage

```tsx
import { Button } from "earthling-ui/button";

function App() {
  return (
    <Button variant="filled" scheme="primary" size="md">
      Click me
    </Button>
  );
}
```

## Theming

Earthling UI comes with built-in theme support:

```css
/* Import the base theme */
@import "earthling-ui";

/* Optional: Import dark theme */
@import "earthling-ui/theme/dark";
```

## Development

This is a monorepo managed with npm workspaces. Key packages:

- `packages/earthling-ui`: The main UI component library
- `packages/create-earthling-app`: CLI tool for project scaffolding
- `apps/pwa`: Demo/documentation site

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## License

MIT © [Steven Frady](https://stevenfrady.com)
