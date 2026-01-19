"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "peer h-5 w-5 shrink-0 rounded-md border border-current/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-transparent data-[state=checked]:bg-(--scheme-tint) data-[state=checked]:text-(--scheme-foreground)",
  {
    variants: {
      scheme: {
        default: `[--scheme-tint:currentColor] [--scheme-foreground:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary)] [--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary)] [--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)] [--scheme-foreground:var(--color-tertiary-foreground)]`,
        good: `[--scheme-tint:var(--color-good)] [--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution)] [--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad)] [--scheme-foreground:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: { scheme: "default" },
  }
);

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, scheme, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ scheme }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <i className="icon-[lucide--check] h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
