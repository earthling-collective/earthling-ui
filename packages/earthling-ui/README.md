# Earthling UI

Opinionated React components with two equal paths: import the package, or eject source into your own codebase. React 18/19, Tailwind CSS 4, Node 20+. Alpha: APIs can evolve.

## Install

```sh
npm install earthling-ui
```

Use your framework's Tailwind 4 integration, then import the styles in its global CSS:

```css
@import "tailwindcss";
@import "earthling-ui/index.css";
@import "earthling-ui/themes/dark.css";

@layer base {
  :root[data-theme="dark"] {
    @apply theme-dark;
  }
  @media (prefers-color-scheme: dark) {
    :root[data-theme="system"] {
      @apply theme-dark;
    }
  }
}
```

```tsx
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";

<Button loading={saving} type="submit">Save changes</Button>
<Input aria-label="Email" type="email" autoComplete="email" />
```

Per-component imports keep dependency graphs focused. Barrel imports from `earthling-ui` also work. ESM entries carry `"use client"` for React Server Components; CommonJS exports include matching declarations. Vite may report harmless ignored-directive notices.

## Conventions

- Controls use `size="sm" | "md" | "lg"`. Supported variants depend on the component; inspect its types instead of assuming every variant is universal.
- Schemes: `default`, `primary`, `secondary`, `tertiary`, `neutral`, `muted`, `good`, `caution`, `bad`.
- Buttons support `paper`, `outline`, and `ghost`; surfaces support `paper` and `glass`.
- Use `className` for local overrides and CSS variables for shared theme changes. Refs and native/primitive props are forwarded.
- Label icon-only controls, inputs, and slider thumbs. Include dialog titles and descriptions. Use interactive surfaces with `asChild` and a semantic button or link.
- Hover and selection feedback are immediate. Spatial motion respects reduced-motion preferences.
- `Button loading` retains the label's width and disables native buttons. `asChild` retains the child's layout; provide its loading indicator and disabled link behavior.
- `Slider value={[20, 80]} thumbLabels={["Minimum", "Maximum"]}` renders a range; `orientation="vertical"` is supported.
- `Progress value={null}` is indeterminate; finite values are clamped to `max`.
- `TableHead numeric` and `TableCell numeric` align numeric columns with tabular figures.
- `TextArea` wraps text and resizes vertically; override with `className="resize-none"` when needed.

## Theme

Override tokens in your own CSS. The root canvas follows the active theme, including native control color scheme.

```css
@layer base {
  :root {
    --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
    --radius-control: 0.75rem;
    --color-primary: oklch(0.45 0.16 265);
    --color-primary-foreground: oklch(0.98 0 0);
  }
}
```

Each scheme has a color and a foreground token. Shared tokens include `--color-background`, `--color-foreground`, `--color-surface`, `--color-outline`, `--color-image-outline`, `--color-light`, and `--color-shadow`. Check contrast when overriding paired colors. Dark mode changes colors without resetting your radius.

## Discover and eject

Commands read the installed version's shipped source, so discovery stays aligned with the code you will use:

```sh
npx earthling-ui list --json
npx earthling-ui info button --json
npx earthling-ui info dialog --source --json
npx earthling-ui init
npx earthling-ui eject button --dry-run --json
npx earthling-ui eject button --no-install --json
```

`init` writes `earthling-ui.config.json`; automation can write this small file directly:

```json
{ "componentDir": "src/components", "utilsDir": "src/utils" }
```

Eject finds the nearest parent config, copies transitive local source dependencies, rewrites aliases, and installs declared dependency versions with the project's package manager. Paths stay inside that project. Existing component files require `--overwrite`; existing shared utilities are preserved. `--dry-run` writes nothing and installs nothing. `--no-install` reports dependencies for you to install separately. JSON output avoids prompts and errors exit nonzero.

Keep the package CSS import after ejecting: source ownership and theme delivery are separate. Tailwind must scan your ejected source directory; add `@source "./path/to/components";` if it is outside automatic scanning. Keep React and React DOM installed.

## Agents

Start with [llms.txt](llms.txt). Use `list` to discover names, `info` for exact exports/dependencies, and `info --source` only when implementation detail is needed. Published `earthling-ui/catalog.json` exposes the same source-derived metadata without launching the CLI. Read the matching `dist/components/<name>/index.d.ts` for prop types. Prefer existing components before creating new primitives.

The metadata is Earthling's local package catalog, not a shadcn registry endpoint. This uses concise guidance and progressive discovery informed by [AGENTS.md](https://agents.md/), the [llms.txt proposal](https://llmstxt.org/), and [shadcn registry metadata](https://ui.shadcn.com/docs/registry/registry-item-json). No additional agent server is required.

MIT © [Steven Frady](https://stevenfrady.com)
