"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

const spinnerVariants = cva(
  "inline-block shrink-0 animate-spin icon-[lucide--loader-circle] text-(--scheme-tint)",
  {
    variants: {
      scheme: {
        default: `[--scheme-tint:currentColor]`,
        primary: `[--scheme-tint:var(--color-primary)]`,
        secondary: `[--scheme-tint:var(--color-secondary)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)]`,
        neutral: `[--scheme-tint:var(--color-neutral)]`,
        muted: `[--scheme-tint:var(--color-muted)]`,
        good: `[--scheme-tint:var(--color-good)]`,
        caution: `[--scheme-tint:var(--color-caution)]`,
        bad: `[--scheme-tint:var(--color-bad)]`,
      },
      size: { sm: "size-4", md: "size-5", lg: "size-7" },
    },
    defaultVariants: { scheme: "default", size: "md" },
  }
);

export interface SpinnerProps
  extends ComponentProps<"span">,
    VariantProps<typeof spinnerVariants> {}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, scheme, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        data-scheme={scheme}
        className={cn(spinnerVariants({ scheme, size }), className)}
        {...props}
      />
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
