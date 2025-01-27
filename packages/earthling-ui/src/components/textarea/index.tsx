import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const textAreaVariants = cva(
  "focus-visible:ring-ring field-sizing-content resize-none rounded-md border border-[currentColor]/30 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:border-[currentColor]/50 hover:bg-[currentColor]/5 focus-visible:ring-2 focus-visible:ring-outline focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "min-h-9 px-3 py-[calc((36px-1.5rem)/2)]",
        md: "min-h-10 px-4 py-[calc((40px-1.5rem)/2)]",
        lg: "min-h-11 px-8 py-[calc((44px-1.5rem)/2)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface TextAreaProps
  extends Omit<ComponentProps<"textarea">, "size">,
    VariantProps<typeof textAreaVariants> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = "Textarea";

export { TextArea };
