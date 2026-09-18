"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-muted",
  {
    variants: {
      scheme: schemes,
    },
    defaultVariants: { scheme: "default" },
  },
);

export interface ProgressProps
  extends
    ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

const Progress = forwardRef<
  ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, scheme, ...props }, ref) => {
  const normalizedMax = Number.isFinite(max) && max > 0 ? max : 100;
  const normalizedValue =
    value == null || !Number.isFinite(value)
      ? null
      : Math.min(Math.max(value, 0), normalizedMax);
  const percentage =
    normalizedValue === null ? null : (normalizedValue / normalizedMax) * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={normalizedValue}
      max={normalizedMax}
      className={cn(progressVariants({ scheme }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full bg-(--scheme-tint) transition-transform duration-300 ease-out data-[state=indeterminate]:w-1/2 data-[state=indeterminate]:translate-x-1/2 data-[state=indeterminate]:animate-pulse motion-reduce:animate-none motion-reduce:transition-none"
        style={
          percentage === null
            ? undefined
            : { transform: `translateX(-${100 - percentage}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
