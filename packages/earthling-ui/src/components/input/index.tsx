"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";
import { Input as InputPrimitive } from "react-aria-components";

const inputVariants = cva(
  "focus-visible:ring-ring rounded-control border text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-outline focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      material: {
        paper:
          "bg-(--scheme-tint)/5 text-current border-transparent hover:bg-(--scheme-tint)/10",
        outline:
          "border-(--scheme-tint)/30 hover:border-(--scheme-tint)/50 hover:bg-(--scheme-tint)/5 ",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
      scheme: {
        default: `[--scheme-tint:currentColor;--scheme-foreground:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary);--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary);--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary);--scheme-foreground:var(--color-tertiary-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted);--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good);--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution);--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad);--scheme-foreground:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: {
      material: "outline",
      size: "md",
      scheme: "default",
    },
  }
);

export interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, scheme, material, ...props }, ref) => {
    return (
      <InputPrimitive
        className={cn(inputVariants({ size, scheme, material }), className)}
        ref={ref}
        data-scheme={scheme}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
