"use client";

import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      material: {
        paper:
          "border-transparent bg-(--scheme-tint) text-(--scheme-foreground)",
        outline:
          "border border-(--scheme-tint)/50 text-(--scheme-tint) bg-transparent",
      },
      scheme: {
        default: `[--scheme-tint:currentColor] [--scheme-foreground:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary)] [--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary)] [--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)] [--scheme-foreground:var(--color-tertiary-foreground)]`,
        neutral: `[--scheme-tint:var(--color-neutral)] [--scheme-foreground:var(--color-neutral-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted)] [--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good)] [--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution)] [--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad)] [--scheme-foreground:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: { material: "paper", scheme: "default" },
  }
);

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  material,
  scheme,
  asChild,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ material, scheme }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
