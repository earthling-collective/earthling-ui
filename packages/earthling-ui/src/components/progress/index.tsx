"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-muted",
  {
    variants: {
      scheme: {
        default: `[--scheme-tint:var(--color-primary)]`,
        primary: `[--scheme-tint:var(--color-primary)]`,
        secondary: `[--scheme-tint:var(--color-secondary)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)]`,
        good: `[--scheme-tint:var(--color-good)]`,
        caution: `[--scheme-tint:var(--color-caution)]`,
        bad: `[--scheme-tint:var(--color-bad)]`,
      },
    },
    defaultVariants: { scheme: "default" },
  }
);

export interface ProgressProps
  extends ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

const Progress = forwardRef<
  ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, scheme, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ scheme }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-(--scheme-tint) transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
