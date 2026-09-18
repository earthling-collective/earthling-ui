"use client";

import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const surfaceVariants = cva(
  "relative flow-root rounded-lg border p-4 text-foreground",
  {
    variants: {
      material: {
        paper: "border-current/10 bg-surface shadow-xs",
        glass:
          "border-current/10 bg-surface/75 shadow-xs backdrop-blur-sm before:pointer-events-none before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-[linear-gradient(var(--color-light),transparent_45%)] before:p-px before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#000,#000),_linear-gradient(#000,#000)] before:[mask-origin:content-box,_border-box] before:select-none",
      },
      interactive: {
        true: "cursor-pointer hover:border-current/20 hover:bg-current/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline",
        false: "",
      },
    },
    compoundVariants: [
      {
        material: "glass",
        interactive: true,
        className: "hover:border-current/20 hover:bg-surface/90",
      },
    ],
    defaultVariants: {
      interactive: false,
      material: "glass",
    },
  },
);

export interface SurfaceProps
  extends ComponentProps<"div">, VariantProps<typeof surfaceVariants> {
  asChild?: boolean;
}

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, asChild, interactive, material, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(surfaceVariants({ interactive, material }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Surface.displayName = "Surface";

export { Surface };
