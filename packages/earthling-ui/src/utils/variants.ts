export const schemes = {
  default:
    "[--scheme-tint:var(--color-foreground)] [--scheme-foreground:var(--color-background)]",
  primary:
    "[--scheme-tint:var(--color-primary)] [--scheme-foreground:var(--color-primary-foreground)]",
  secondary:
    "[--scheme-tint:var(--color-secondary)] [--scheme-foreground:var(--color-secondary-foreground)]",
  tertiary:
    "[--scheme-tint:var(--color-tertiary)] [--scheme-foreground:var(--color-tertiary-foreground)]",
  neutral:
    "[--scheme-tint:var(--color-neutral)] [--scheme-foreground:var(--color-neutral-foreground)]",
  muted:
    "[--scheme-tint:var(--color-muted)] [--scheme-foreground:var(--color-muted-foreground)]",
  good: "[--scheme-tint:var(--color-good)] [--scheme-foreground:var(--color-good-foreground)]",
  caution:
    "[--scheme-tint:var(--color-caution)] [--scheme-foreground:var(--color-caution-foreground)]",
  bad: "[--scheme-tint:var(--color-bad)] [--scheme-foreground:var(--color-bad-foreground)]",
} as const;
