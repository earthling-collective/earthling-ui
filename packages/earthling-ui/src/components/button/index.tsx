import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ComponentProps, forwardRef } from "react";

const buttonVariants = cva(
  "focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-control border border-transparent text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:ring-2  focus-visible:outline-hidden focus-visible:ring-outline disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "",
        outline: "",
        ghost: "",
      },
      scheme: {
        default: "",
        primary: "",
        secondary: "",
        good: "",
        bad: "",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      //
      {
        scheme: "default",
        variant: "filled",
        className:
          "bg-primary text-primary-foreground hover:bg-primary/85 aria-pressed:bg-primary/70 aria-pressed:hover:bg-primary/55",
      },
      {
        scheme: "primary",
        variant: "filled",
        className:
          "bg-primary text-primary-foreground hover:bg-primary/85 aria-pressed:bg-primary/70 aria-pressed:hover:bg-primary/55",
      },
      {
        scheme: "secondary",
        variant: "filled",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 aria-pressed:bg-secondary/70 aria-pressed:hover:bg-secondary/55",
      },
      {
        scheme: "good",
        variant: "filled",
        className:
          "bg-good text-good-foreground hover:bg-good/85 aria-pressed:bg-good/70 aria-pressed:hover:bg-good/55",
      },
      {
        scheme: "bad",
        variant: "filled",
        className:
          "bg-bad text-bad-foreground hover:bg-bad/85 aria-pressed:bg-bad/70 aria-pressed:hover:bg-bad/55",
      },
      // outline
      {
        scheme: "default",
        variant: "outline",
        className:
          "border-current/30 hover:border-current/50 hover:bg-current/5 aria-pressed:bg-current/10 aria-pressed:hover:bg-current/15",
      },
      {
        scheme: "primary",
        variant: "outline",
        className:
          "border-primary/30 hover:border-primary/50 hover:bg-primary/5 aria-pressed:bg-primary/10 aria-pressed:hover:bg-primary/15",
      },
      {
        scheme: "secondary",
        variant: "outline",
        className:
          "border-secondary/30 hover:border-secondary/50 hover:bg-secondary/5 aria-pressed:bg-secondary/10 aria-pressed:hover:bg-secondary/15",
      },
      {
        scheme: "good",
        variant: "outline",
        className:
          "border-good/30 hover:border-good/50 hover:bg-good/5 aria-pressed:bg-good/10 aria-pressed:hover:bg-good/15",
      },
      {
        scheme: "bad",
        variant: "outline",
        className:
          "border-bad/30 hover:border-bad/50 hover:bg-bad/5 aria-pressed:bg-bad/10 aria-pressed:hover:bg-bad/15",
      },
      // ghost
      {
        scheme: "default",
        variant: "ghost",
        className:
          "hover:bg-current/5 aria-pressed:bg-current/10 aria-pressed:hover:bg-current/15",
      },
      {
        scheme: "primary",
        variant: "ghost",
        className:
          "hover:bg-primary/5 aria-pressed:bg-primary/10 aria-pressed:hover:bg-primary/15",
      },
      {
        scheme: "secondary",
        variant: "ghost",
        className:
          "hover:bg-secondary/5 aria-pressed:bg-secondary/10 aria-pressed:hover:bg-secondary/15",
      },
      {
        scheme: "good",
        variant: "ghost",
        className:
          "hover:bg-good/5 aria-pressed:bg-good/10 aria-pressed:hover:bg-good/15",
      },
      {
        scheme: "bad",
        variant: "ghost",
        className:
          "hover:bg-bad/5 aria-pressed:bg-bad/10 aria-pressed:hover:bg-bad/15",
      },
    ],
    defaultVariants: {
      variant: "filled",
      scheme: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, scheme, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, scheme }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
