"use client";

import { cn } from "@/utils/cn";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import {
  Breadcrumbs as BreadcrumbsPrimitive,
  Breadcrumb as BreadcrumbPrimitive,
  composeRenderProps,
} from "react-aria-components";

//Breadcrumbs
export interface BreadcrumbsProps extends ComponentPropsWithoutRef<
  typeof BreadcrumbsPrimitive
> {}

const Breadcrumbs = forwardRef<
  ComponentRef<typeof BreadcrumbsPrimitive>,
  BreadcrumbsProps
>(({ className, ...props }, ref) => {
  return (
    <BreadcrumbsPrimitive
      ref={ref}
      {...props}
      className={cn(
        "m-0 flex list-none flex-wrap items-center p-0 text-sm text-muted-foreground",
        className,
      )}
    />
  );
});
Breadcrumbs.displayName = "Breadcrumbs";

//Breadcrumb
export interface BreadcrumbProps extends ComponentPropsWithoutRef<
  typeof BreadcrumbPrimitive
> {
  /** Marks this breadcrumb as the current page (sets `aria-current="page"`). */
  current?: boolean;
}

const Breadcrumb = forwardRef<
  ComponentRef<typeof BreadcrumbPrimitive>,
  BreadcrumbProps
>(({ className, current, ...props }, ref) => {
  return (
    <BreadcrumbPrimitive
      ref={ref}
      aria-current={current ? "page" : undefined}
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "flex min-w-0 items-center after:mx-1.5 after:size-3.5 after:shrink-0 after:icon-[lucide--chevron-right] last:after:hidden aria-[current=page]:font-medium aria-[current=page]:text-foreground",
          className,
        ),
      )}
    />
  );
});
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumbs, Breadcrumb };
