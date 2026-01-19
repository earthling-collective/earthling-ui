"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const radioGroupVariants = cva("grid gap-2", {
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
});

export interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroup = forwardRef<
  ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, scheme, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupVariants({ scheme }), className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
  ComponentRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-5 w-5 rounded-full border border-current/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-transparent data-[state=checked]:bg-(--scheme-tint)",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <i className="icon-[lucide--circle] h-2.5 w-2.5 fill-current text-(--scheme-foreground)" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, radioGroupVariants };
