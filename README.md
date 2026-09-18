# Earthling UI

An opinionated React UI library for the Earthling ecosystem. Import components as a package, or eject their source and make them your own. Alpha: APIs can evolve.

[Installation, theming, and CLI](packages/earthling-ui/README.md) · [Agent entry point](packages/earthling-ui/llms.txt)

## Development

Requires Node 20+, Bun, React 18/19, and Tailwind CSS 4.

```sh
bun install
bun run build
bun run typecheck
bun run test:unit
bun run test:integration
```

The library lives in `packages/earthling-ui`. `apps/docs` consumes the workspace package; rebuilding the library updates its imports. Run `bun run --cwd apps/docs dev` to preview it. Validate docs with `bun run --cwd apps/docs typecheck` and `bun run --cwd apps/docs build`. The packed Vite fixture checks published imports, TypeScript declarations, and compiled Tailwind styles.

`bun run test:unit` is offline. Integration checks install a packed consumer and dependencies in temporary directories. Template scaffolding checks in `tests/create-templates.test.ts` are separate network smoke tests.

MIT © [Steven Frady](https://stevenfrady.com)
