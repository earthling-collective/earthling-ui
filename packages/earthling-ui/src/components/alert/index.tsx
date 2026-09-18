"use client";

import { type ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";

const alertVariants = cva(
  "relative w-full rounded-lg border border-(--scheme-tint)/25 bg-(--scheme-tint)/5 p-4 text-sm text-foreground [&>svg~*]:ps-7 [&>svg]:absolute [&>svg]:start-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      scheme: schemes,
    },
    defaultVariants: { scheme: "default" },
  },
);

export interface AlertProps
  extends ComponentProps<"div">, VariantProps<typeof alertVariants> {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, scheme, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ scheme }), className)}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";

const AlertTitle = forwardRef<HTMLHeadingElement, ComponentProps<"h5">>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-tight tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm/relaxed [&_p]:leading-relaxed", className)}
      {...props}
    />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
