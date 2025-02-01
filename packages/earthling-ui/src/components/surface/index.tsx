"use client";

import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const surfaceVariants = cva(
  "flow-root rounded-md bg-surface border-current/10 transition-colors relative p-4",
  {
    variants: {
      material: {
        paper: "bg-current/5",
        glass:
          "border border-current/5 shadow-xs backdrop-blur-sm before:pointer-events-none before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-[linear-gradient(var(--color-light),transparent_45%)] before:p-px before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#000,#000),_linear-gradient(#000,#000)] before:[mask-origin:content-box,_border-box] before:select-none",
      },
      interactive: {
        true: "cursor-pointer hover:bg-current/10 hover:border-current/20",
        false: "",
      },
    },
    compoundVariants: [
      {
        material: "glass",
        interactive: true,
        className: "hover:border-current/10",
      },
    ],
    defaultVariants: {
      interactive: false,
      material: "glass",
    },
  }
);

export interface SurfaceProps
  extends ComponentProps<"div">,
    VariantProps<typeof surfaceVariants> {
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
  }
);
Surface.displayName = "Surface";

export { Surface };
