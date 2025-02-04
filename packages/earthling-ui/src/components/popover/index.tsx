"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils/cn";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-background p-4 text-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverArrow = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    asChild
    ref={ref}
    className={cn("-mt-px", className)}
    {...props}
  >
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0 4.35968L-1.0 -0.5L11.0 -0.5L5.0 4.35968Z"
        className="fill-background stroke-current/15"
      />
    </svg>
  </PopoverPrimitive.Arrow>
));

export { Popover, PopoverTrigger, PopoverContent, PopoverArrow };
