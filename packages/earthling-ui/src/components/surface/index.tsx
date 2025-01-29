import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const surfaceVariants = cva(
  "flow-root rounded-md bg-current/5 transition-colors relative p-4",
  {
    variants: {
      material: {
        paper: "border border-current/10 bg-current/5",
        glass:
          "before:pointer-events-none before:absolute before:inset-[-1px] before:p-px before:rounded-[inherit] before:[mask-image:linear-gradient(#000,#000),_linear-gradient(#000,#000)] before:[mask-clip:content-box,_border-box] before:[mask-origin:content-box,_border-box] before:[mask-composite:exclude] before:select-none before:bg-[linear-gradient(var(--color-light),transparent_45%)] ",
      },
      interactive: {
        true: "cursor-pointer hover:bg-current/10 hover:border-current/20",
        false: "",
      },
    },
    defaultVariants: {
      interactive: false,
      material: "glass",
    },
  }
);

export interface SurfaceProps
  extends ComponentProps<"div">,
    VariantProps<typeof surfaceVariants> {
  asChild?: boolean;
}

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, asChild, interactive, material, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(surfaceVariants({ interactive, material }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Surface.displayName = "Surface";

export { Surface };
