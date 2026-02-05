"use client";

import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

const Skeleton = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("animate-pulse rounded-md bg-muted", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
