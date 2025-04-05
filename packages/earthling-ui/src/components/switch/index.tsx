"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-muted",
  {
    variants: {
      material: { paper: "bg-muted data-[state=checked]:bg-(--scheme-tint)" },
      scheme: {
        default: `[--scheme-tint:currentColor]`,
        primary: `[--scheme-tint:var(--color-primary)]`,
        secondary: `[--scheme-tint:var(--color-secondary)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)]`,
        muted: `[--scheme-tint:var(--color-muted)]`,
        good: `[--scheme-tint:var(--color-good)]`,
        caution: `[--scheme-tint:var(--color-caution)]`,
        bad: `[--scheme-tint:var(--color-bad)]`,
      },
    },
    defaultVariants: { material: "paper", scheme: "default" },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-[translate,background-color] data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      material: {
        paper: "bg-muted-foreground data-[state=checked]:bg-(--scheme-tint)",
      },
      scheme: {
        default: `[--scheme-tint:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: { material: "paper", scheme: "default" },
  }
);

export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = forwardRef<
  ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, material, scheme, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ material, scheme }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(switchThumbVariants({ material, scheme }))}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
