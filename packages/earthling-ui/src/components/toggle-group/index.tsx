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

const toggleGroupVariants = cva("flex items-center justify-center", {
  variants: {
    material: {
      paper:
        "rounded-control bg-[var(--scheme-base)] bg-muted text-muted-foreground",
      glass: "",
      outline: "",
      ghost: "",
    },
    scheme: {
      default: `[--scheme-tint:currentColor;--scheme-foreground:var(--color-background)];--scheme-base:var(--color-muted);`,
      primary: `[--scheme-tint:var(--color-primary);--scheme-foreground:var(--color-primary-foreground)]`,
      secondary: `[--scheme-tint:var(--color-secondary);--scheme-foreground:var(--color-secondary-foreground)]`,
      tertiary: `[--scheme-tint:var(--color-tertiary);--scheme-foreground:var(--color-tertiary-foreground)]`,
      muted: `[--scheme-tint:var(--color-muted);--scheme-foreground:var(--color-muted-foreground)]`,
      good: `[--scheme-tint:var(--color-good);--scheme-foreground:var(--color-good-foreground)]`,
      caution: `[--scheme-tint:var(--color-caution);--scheme-foreground:var(--color-caution-foreground)]`,
      bad: `[--scheme-tint:var(--color-bad);--scheme-foreground:var(--color-bad-foreground)]`,
    },
    size: {
      sm: "p-1",
      md: "p-1",
      lg: "p-1",
    },
  },
  defaultVariants: {
    material: "paper",
    size: "md",
  },
});

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleGroupVariants>
>({
  size: "md",
  material: "paper",
  scheme: "default",
});

const ToggleGroup = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupVariants>
>(({ className, material, size, scheme, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(toggleGroupVariants({ material, size, scheme }), className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ material, scheme, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const toggleGroupItemVariants = cva(
  "-ml-px inline-flex cursor-pointer items-center justify-center gap-1 transition-colors first:ml-0 first:rounded-l-control last:rounded-r-control",
  {
    variants: {
      material: {
        paper:
          "aria-checked:bg-primary aria-checked:text-primary-foreground rounded-control",
        glass: "",
        outline:
          "border border-current/30 hover:bg-current/5 aria-checked:bg-current/10 aria-checked:hover:bg-current/15",
        ghost: "",
      },
      scheme: {
        default: `[--scheme-tint:currentColor;--scheme-foreground:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary);--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary);--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary);--scheme-foreground:var(--color-tertiary-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted);--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good);--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution);--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad);--scheme-foreground:var(--color-bad-foreground)]`,
      },
      size: {
        sm: "h-7 px-2.5 min-w-9",
        md: "h-8 px-3 min-w-10",
        lg: "h-9 px-5 min-w-11",
      },
    },
    defaultVariants: {
      material: "paper",
      size: "md",
    },
  }
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
          material: material || context.material,
          scheme: scheme || context.scheme,
          size: size || context.size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
