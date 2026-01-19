"use client";

import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const cardVariants = cva(
  "rounded-lg border bg-surface text-foreground transition-colors",
  {
    variants: {
      material: {
        paper: "bg-surface shadow-sm",
        glass:
          "border-current/5 backdrop-blur-sm bg-current/5 before:pointer-events-none before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-[linear-gradient(var(--color-light),transparent_45%)] before:p-px before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#000,#000),_linear-gradient(#000,#000)] before:[mask-origin:content-box,_border-box] before:select-none relative",
      },
      interactive: {
        true: "cursor-pointer hover:bg-current/10 hover:border-current/20",
        false: "",
      },
    },
    defaultVariants: {
      material: "paper",
      interactive: false,
    },
  }
);

export interface CardProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, material, interactive, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ material, interactive }), className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};
