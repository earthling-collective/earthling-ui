"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

const buttonVariants = cva(
  "focus-visible:ring-ring inline-flex aspect-(--scheme-aspect) cursor-pointer items-center items-center justify-center justify-center gap-2 rounded-control border border-transparent text-sm font-medium whitespace-nowrap  ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-outline focus-visible:outline-hidden aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      material: {
        paper:
          "bg-(--scheme-tint) text-(--scheme-foreground) shadow-xs hover:bg-(--scheme-tint)/85 aria-pressed:bg-(--scheme-tint)/70 aria-pressed:hover:bg-(--scheme-tint)/55",
        outline:
          "text-foreground border-(--scheme-tint)/30 hover:border-(--scheme-tint)/50 hover:bg-(--scheme-tint)/5 aria-pressed:bg-(--scheme-tint)/10 aria-pressed:hover:bg-(--scheme-tint)/15",
        ghost:
          "text-foreground hover:bg-(--scheme-tint)/5 aria-pressed:bg-(--scheme-tint)/10 aria-pressed:hover:bg-(--scheme-tint)/15",
      },
      scheme: {
        primary: `[--scheme-tint:var(--color-primary)] [--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary)] [--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)] [--scheme-foreground:var(--color-tertiary-foreground)]`,
        neutral: `[--scheme-tint:var(--color-neutral)] [--scheme-foreground:var(--color-neutral-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted)] [--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good)] [--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution)] [--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad)] [--scheme-foreground:var(--color-bad-foreground)]`,
      },
      size: { sm: "h-9 px-3", md: "h-10 px-4 py-2", lg: "h-11 px-8" },
      shape: { pill: "", icon: "px-0 aspect-square" },
    },
    defaultVariants: {
      material: "paper",
      scheme: "primary",
      size: "md",
      shape: "pill",
    },
  }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, material, size, scheme, shape, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ material, size, scheme, shape }),
          className
        )}
        ref={ref}
        data-scheme={scheme}
        aria-disabled={props.disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
