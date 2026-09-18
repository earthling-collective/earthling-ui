"use client";

import { type ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { Slot } from "@radix-ui/react-slot";

const chipVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2",
  {
    variants: {
      material: {
        paper:
          "border-transparent bg-(--scheme-tint) text-(--scheme-foreground) hover:bg-(--scheme-tint)/80",
      },
      scheme: schemes,
    },
    defaultVariants: { material: "paper", scheme: "primary" },
  },
);

export interface ChipProps
  extends ComponentProps<"div">, VariantProps<typeof chipVariants> {
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
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
