"use client";

import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-bad aria-invalid:ring-bad/30 ",
  {
    variants: {
      material: { paper: "bg-muted data-[state=checked]:bg-(--scheme-tint)" },
      scheme: schemes,
    },
    defaultVariants: { material: "paper", scheme: "default" },
  },
);

export interface SwitchProps
  extends
    ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = forwardRef<
  ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, material, scheme, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ material, scheme }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="pointer-events-none block size-5 rounded-full bg-muted-foreground shadow-sm transition-transform duration-150 ease-out motion-reduce:transition-none data-[state=checked]:bg-(--scheme-foreground) data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 rtl:data-[state=checked]:-translate-x-5" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
