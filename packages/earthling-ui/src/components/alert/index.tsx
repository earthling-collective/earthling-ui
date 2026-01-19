"use client";

import { type ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      scheme: {
        default: "bg-background text-foreground",
        muted: "border-muted/50 text-muted-foreground bg-muted/10 [&>svg]:text-muted-foreground",
        good: "border-good/50 text-good bg-good/10 [&>svg]:text-good",
        caution:
          "border-caution/50 text-caution bg-caution/10 [&>svg]:text-caution",
        bad: "border-bad/50 text-bad bg-bad/10 [&>svg]:text-bad",
      },
    },
    defaultVariants: { scheme: "default" },
  }
);

export interface AlertProps
  extends ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, scheme, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ scheme }), className)}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  ComponentProps<"h5">
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
