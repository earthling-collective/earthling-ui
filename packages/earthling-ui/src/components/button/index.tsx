"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { type ComponentProps, forwardRef } from "react";

const buttonVariants = cva(
  "relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-(--radius-control) border border-transparent text-sm font-medium whitespace-nowrap ring-offset-background focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-invalid:border-bad aria-invalid:ring-bad/30",
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
      scheme: schemes,
      size: { sm: "h-9 px-3", md: "h-10 px-4 py-2", lg: "h-11 px-8" },
      shape: { pill: "", icon: "px-0 aspect-square" },
    },
    defaultVariants: {
      material: "paper",
      scheme: "primary",
      size: "md",
      shape: "pill",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  /** Disables the tactile scale-on-press feedback when motion would distract. */
  static?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      material,
      size,
      scheme,
      shape,
      asChild = false,
      loading = false,
      static: isStatic = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ material, size, scheme, shape }),
          !isStatic &&
            "transition-transform duration-150 ease-out motion-reduce:transition-none active:scale-[0.96] motion-reduce:active:scale-100",
          className,
        )}
        ref={ref}
        data-scheme={scheme}
        disabled={asChild ? undefined : disabled || loading}
        aria-disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && !asChild ? (
          <>
            <span className="inline-flex items-center gap-[inherit] opacity-0">
              {children}
            </span>
            <span
              aria-hidden="true"
              className="absolute size-4 animate-spin rounded-full border-2 border-current/30 border-t-current motion-reduce:animate-none"
            />
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
