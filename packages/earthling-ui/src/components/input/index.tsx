import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const inputVariants = cva(
  "focus-visible:ring-ring rounded-control border border-current/30 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:border-current/50 hover:bg-current/5 focus-visible:ring-2 focus-visible:ring-outline focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
