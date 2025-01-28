import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const cardVariants = cva("flow-root border border-current/30 rounded-md", {
  variants: {},
  defaultVariants: {},
});

export interface CardProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(cardVariants({}), className)} ref={ref} {...props} />
    );
  }
);
Card.displayName = "Card";

export { Card };

// Header
const cardHeaderVariants = cva("m-6", {
  variants: {},
  defaultVariants: {},
});

export interface CardHeaderProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(cardHeaderVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

export { CardHeader };

// Title
const cardTitleVariants = cva("text-2xl font-semibold", {
  variants: {},
  defaultVariants: {},
});

export interface CardTitleProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardTitleVariants> {}

const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(cardTitleVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

export { CardTitle };

// Subtitle
const cardSubtitleVariants = cva("text-sm text-foreground/60", {
  variants: {},
  defaultVariants: {},
});

export interface CardSubtitleProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardSubtitleVariants> {}

const CardSubtitle = forwardRef<HTMLDivElement, CardSubtitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(cardSubtitleVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardSubtitle.displayName = "CardSubtitle";

export { CardSubtitle };

// Content
const cardContentVariants = cva("m-6", {
  variants: {},
  defaultVariants: {},
});

export interface CardContentProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardContentVariants> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(cardContentVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardContent.displayName = "CardContent";

export { CardContent };

// Content
const cardFooterVariants = cva("m-6", {
  variants: {},
  defaultVariants: {},
});

export interface CardFooterProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardFooterVariants> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(cardFooterVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export { CardFooter };
