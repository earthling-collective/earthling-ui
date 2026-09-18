"use client";

import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const textAreaVariants = cva(
  "field-sizing-content resize-y rounded-md border border-(--scheme-tint)/30 text-base font-medium ring-offset-background placeholder:text-current/50 hover:border-(--scheme-tint)/50 hover:bg-(--scheme-tint)/5 focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:resize-none disabled:opacity-50 aria-invalid:border-bad aria-invalid:ring-bad/30 sm:text-sm",
  {
    variants: {
      size: {
        sm: "min-h-9 px-3 py-[calc((36px-1.5rem)/2)]",
        md: "min-h-10 px-4 py-[calc((40px-1.5rem)/2)]",
        lg: "min-h-11 px-8 py-[calc((44px-1.5rem)/2)]",
      },
      scheme: schemes,
    },
    defaultVariants: { size: "md", scheme: "default" },
  },
);

export interface TextAreaProps
  extends
    Omit<ComponentProps<"textarea">, "size">,
    VariantProps<typeof textAreaVariants> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, scheme, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ size, scheme }), className)}
        ref={ref}
        data-scheme={scheme}
        {...props}
      />
    );
  },
);
TextArea.displayName = "TextArea";

export { TextArea };
