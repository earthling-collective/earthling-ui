import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps, type ComponentRef } from "react";

const themeSwitcherVariants = cva(
  "flex flex-row overflow-hidden rounded-control border border-current/30 focus-within:ring-2 focus-within:ring-outline",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface ThemeSwitcherProps
  extends ComponentProps<"fieldset">,
    VariantProps<typeof themeSwitcherVariants> {
  label?: string;
}

const ThemeSwitcher = forwardRef<ComponentRef<"fieldset">, ThemeSwitcherProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <fieldset
        className={cn(themeSwitcherVariants({}), className)}
        ref={ref}
        {...props}
      >
        <label className="sr-only">{label ?? `Select a display theme:`}</label>
        {children}
      </fieldset>
    );
  }
);
ThemeSwitcher.displayName = "ThemeSwitcher";

export { ThemeSwitcher };

// Item
const themeSwitcherItemVariants = cva(
  "flex h-9 cursor-pointer items-center justify-center border-current/30 px-3 transition-colors",
  {
    variants: {
      checked: {
        true: "bg-current/10 hover:bg-current/15",
        false: "hover:bg-current/5",
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);

export interface ThemeSwitcherItemProps
  extends ComponentProps<"label">,
    VariantProps<typeof themeSwitcherItemVariants> {
  name?: string;
  value?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const ThemeSwitcherItem = forwardRef<
  ComponentRef<"label">,
  ThemeSwitcherItemProps
>(
  (
    {
      className,
      children,
      name,
      value,
      checked,
      onCheckedChange,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(themeSwitcherItemVariants({ checked }), className)}
        ref={ref}
        {...props}
      >
        <input
          type="radio"
          className="sr-only"
          name={name}
          value={value}
          checked={checked || false}
          onChange={(e) => {
            onCheckedChange?.(e.target.checked);
          }}
        />
        {children}
      </label>
    );
  }
);
ThemeSwitcherItem.displayName = "ThemeSwitcherItem";

export { ThemeSwitcherItem };
