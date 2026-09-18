"use client";

import {
  createContext,
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";

const toggleGroupVariants = cva("flex items-center justify-center", {
  variants: {
    material: {
      paper: "rounded-(--radius-control) bg-muted text-muted-foreground",
    },
    scheme: schemes,
    size: { sm: "p-1", md: "p-1", lg: "p-1" },
  },
  defaultVariants: { material: "paper", size: "md", scheme: "primary" },
});

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleGroupVariants>
>({ size: "md", material: "paper", scheme: "primary" });

const ToggleGroup = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupVariants>
>(
  (
    {
      className,
      material = "paper",
      size = "md",
      scheme = "primary",
      children,
      ...props
    },
    ref,
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(toggleGroupVariants({ material, size, scheme }), className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ material, scheme, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const toggleGroupItemVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-1.5 text-sm font-medium ring-offset-background hover:bg-(--scheme-tint)/5 focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      material: {
        paper:
          "data-[state=on]:bg-(--scheme-tint) data-[state=on]:text-(--scheme-foreground) data-[state=on]:shadow-xs rounded-[max(0px,calc(var(--radius-control)-0.25rem))]",
      },
      scheme: schemes,
      size: {
        sm: "h-7 px-2.5 min-w-9",
        md: "h-8 px-3 min-w-10",
        lg: "h-9 px-5 min-w-11",
      },
    },
    defaultVariants: { material: "paper", size: "md" },
  },
);

const ToggleGroupItem = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleGroupVariants>
>(({ className, children, material, scheme, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          material: material ?? context.material,
          scheme: scheme ?? context.scheme,
          size: size ?? context.size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
