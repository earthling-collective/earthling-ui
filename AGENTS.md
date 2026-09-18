# Earthling UI

- Library code lives in `packages/earthling-ui`; the documentation site lives in `apps/docs`. Keep other public sites unchanged unless requested.
- For docs changes, run the docs typecheck and production build. Keep examples as statically imported client components shared with their source display; use the generated package catalog for API metadata.
- Run `bun run typecheck`, `bun run test:unit`, and `bun run test:integration` after library changes. Use `bun run build` before checking packed output.
- Preserve both package imports and source ejection. Shared component helpers belong in `src/utils`; use relative sibling imports or `@/utils/*` and keep dependencies explicit.
- Keep Radix/React Aria semantics, forwarded refs, controlled/uncontrolled behavior, keyboard access, and caller class overrides intact. Test behavior changes.
- Use instant hover feedback, specific motion properties, reduced-motion alternatives, visible keyboard focus, and theme tokens. Avoid new runtime dependencies for cosmetic changes.
- `packages/earthling-ui/README.md` owns consumer guidance. CLI `list --json` and `info <component> --json` derive metadata from shipped source; do not maintain a duplicate component catalog.
- Keep comments short. Update or remove obsolete documentation with the code; do not add implementation diaries.
