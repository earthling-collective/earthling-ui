"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

const labelVariants = cva(
  "inline-flex items-center gap-2 font-medium leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-aria-disabled:pointer-events-none group-aria-disabled:opacity-50",
  {
    variants: {
      size: { sm: "text-xs", md: "text-sm", lg: "text-base" },
    },
    defaultVariants: { size: "md" },
  }
);

export interface LabelProps
  extends ComponentProps<"label">,
    VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "label";
    return (
      <Comp
        ref={ref}
        className={cn(labelVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label, labelVariants };
