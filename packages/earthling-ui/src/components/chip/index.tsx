"use client";

import { type ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";

const chipVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      material: {
        paper:
          "border-transparent bg-(--scheme-tint) text-(--scheme-foreground) hover:bg-(--scheme-tint)/80",
      },
      scheme: {
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
    defaultVariants: { material: "paper", scheme: "primary" },
  }
);

export interface ChipProps
  extends ComponentProps<"div">,
    VariantProps<typeof chipVariants> {
  asChild?: boolean;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, material, scheme, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(chipVariants({ material, scheme }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
