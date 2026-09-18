"use client";

import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";
import { Input as InputPrimitive } from "react-aria-components";

const inputVariants = cva(
  "rounded-(--radius-control) border text-base font-medium whitespace-nowrap ring-offset-background placeholder:text-current/50 focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-bad aria-invalid:ring-bad/30 sm:text-sm",
  {
    variants: {
      material: {
        paper:
          "bg-(--scheme-tint)/5 text-current border-transparent hover:bg-(--scheme-tint)/10",
        outline:
          "border-(--scheme-tint)/30 hover:border-(--scheme-tint)/50 hover:bg-(--scheme-tint)/5 ",
      },
      size: { sm: "h-9 px-3", md: "h-10 px-4 py-2", lg: "h-11 px-8" },
      scheme: schemes,
    },
    defaultVariants: { material: "outline", size: "md", scheme: "default" },
  },
);

export interface InputProps
  extends
    Omit<ComponentProps<"input">, "size">,
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
  },
);
Input.displayName = "Input";

export { Input };
