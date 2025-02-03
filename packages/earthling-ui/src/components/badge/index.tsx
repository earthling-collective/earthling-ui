import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      material: {
        paper:
          "border-transparent bg-[var(--scheme-tint)] text-[var(--scheme-foreground)] hover:bg-[var(--scheme-tint)]/80",
      },
      scheme: {
        primary: `[--scheme-tint:var(--color-primary);--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary);--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary);--scheme-foreground:var(--color-tertiary-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted);--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good);--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution);--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad);--scheme-foreground:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: {
      material: "paper",
      scheme: "primary",
    },
  }
);

export interface BadgeProps
  extends ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, material, scheme, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ material, scheme }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
