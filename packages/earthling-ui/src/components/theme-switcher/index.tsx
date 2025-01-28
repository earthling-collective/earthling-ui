import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps, type ComponentRef } from "react";

const themeSwitcherVariants = cva(
  "flex flex-row overflow-hidden rounded-control border border-current/30",
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

export * from "./item";
