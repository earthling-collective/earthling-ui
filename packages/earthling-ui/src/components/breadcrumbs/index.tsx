import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import {
  Breadcrumbs as BreadcrumbsPrimitive,
  Breadcrumb as BreadcrumbPrimitive,
} from "react-aria-components";

//Breadcrumbs
const breadcrumbsVariants = cva("flex items-center list-none m-0 p-0", {
  variants: {},
  defaultVariants: {},
});

export interface BreadcrumbsProps
  extends ComponentPropsWithoutRef<typeof BreadcrumbsPrimitive>,
    VariantProps<typeof breadcrumbsVariants> {}

const Breadcrumbs = forwardRef<
  ComponentRef<typeof BreadcrumbsPrimitive>,
  BreadcrumbsProps
>(({ className, ...props }, ref) => {
  return (
    <BreadcrumbsPrimitive
      ref={ref}
      {...props}
      className={cn(breadcrumbsVariants({}), className)}
    />
  );
});
Breadcrumbs.displayName = "Breadcrumbs";

//Breadcrumb
const breadcrumbVariants = cva(
  "after:px-1.5 after:icon-[lucide--chevron-right] last:after:hidden flex items-center",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface BreadcrumbProps
  extends ComponentPropsWithoutRef<typeof BreadcrumbPrimitive>,
    VariantProps<typeof breadcrumbVariants> {}

const Breadcrumb = forwardRef<
  ComponentRef<typeof BreadcrumbPrimitive>,
  BreadcrumbProps
>(({ className, ...props }, ref) => {
  return (
    <BreadcrumbPrimitive
      ref={ref}
      {...props}
      className={cn(breadcrumbVariants({}), className)}
    />
  );
});
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumbs, Breadcrumb };
