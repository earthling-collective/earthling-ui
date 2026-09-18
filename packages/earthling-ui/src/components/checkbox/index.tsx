"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "peer size-5 shrink-0 rounded-md border border-current/30 ring-offset-background transition-transform duration-150 ease-out motion-reduce:transition-none active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-bad aria-invalid:ring-bad/30 data-[state=checked]:border-transparent data-[state=checked]:bg-(--scheme-tint) data-[state=checked]:text-(--scheme-foreground)",
  {
    variants: {
      scheme: schemes,
    },
    defaultVariants: { scheme: "default" },
  },
);

export interface CheckboxProps
  extends
    ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
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
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current animate-in zoom-in-50 fade-in-0 duration-150 motion-reduce:animate-none">
      <i className="icon-[lucide--check] h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
