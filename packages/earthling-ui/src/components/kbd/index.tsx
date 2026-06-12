"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-current/20 bg-muted/50 px-1.5 font-mono font-medium text-muted-foreground select-none",
  {
    variants: {
      size: {
        sm: "h-5 min-w-5 text-[10px]",
        md: "h-6 min-w-6 text-xs",
        lg: "h-7 min-w-7 text-sm",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface KbdProps
  extends ComponentProps<"kbd">,
    VariantProps<typeof kbdVariants> {}

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
