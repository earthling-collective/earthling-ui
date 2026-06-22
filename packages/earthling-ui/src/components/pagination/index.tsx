"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { type ComponentProps, forwardRef } from "react";

// Pagination (nav landmark)
const Pagination = forwardRef<HTMLElement, ComponentProps<"nav">>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

// PaginationContent
const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("m-0 flex list-none flex-row items-center gap-1 p-0", className)}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

// PaginationItem
const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("flex", className)} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";

// PaginationLink
const paginationLinkVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-1 rounded-control border border-transparent text-sm font-medium whitespace-nowrap transition-colors hover:bg-(--scheme-tint)/5 focus-visible:ring-2 focus-visible:ring-outline focus-visible:outline-hidden aria-[current=page]:border-(--scheme-tint)/30 aria-[current=page]:bg-(--scheme-tint)/10 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      scheme: {
        default: `[--scheme-tint:var(--color-foreground)] [--scheme-foreground:var(--color-background)]`,
        primary: `[--scheme-tint:var(--color-primary)] [--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary)] [--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary)] [--scheme-foreground:var(--color-tertiary-foreground)]`,
        neutral: `[--scheme-tint:var(--color-neutral)] [--scheme-foreground:var(--color-neutral-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted)] [--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good)] [--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution)] [--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad)] [--scheme-foreground:var(--color-bad-foreground)]`,
      },
      size: {
        sm: "h-9 min-w-9 px-2",
        md: "h-10 min-w-10 px-3",
        lg: "h-11 min-w-11 px-4",
      },
    },
    defaultVariants: { scheme: "primary", size: "md" },
  }
);

export interface PaginationLinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof paginationLinkVariants> {
  /** Marks this link as the current page (sets `aria-current="page"`). */
  isActive?: boolean;
}

const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, scheme, size, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      data-scheme={scheme}
      className={cn(paginationLinkVariants({ scheme, size }), className)}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

// PaginationPrevious
const PaginationPrevious = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, children, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      className={cn("gap-1 pl-2.5", className)}
      {...props}
    >
      <i className="size-4 icon-[lucide--chevron-left]" />
      {children ?? <span>Previous</span>}
    </PaginationLink>
  )
);
PaginationPrevious.displayName = "PaginationPrevious";

// PaginationNext
const PaginationNext = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, children, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      className={cn("gap-1 pr-2.5", className)}
      {...props}
    >
      {children ?? <span>Next</span>}
      <i className="size-4 icon-[lucide--chevron-right]" />
    </PaginationLink>
  )
);
PaginationNext.displayName = "PaginationNext";

// PaginationEllipsis
const PaginationEllipsis = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden
      className={cn("flex h-10 w-10 items-center justify-center", className)}
      {...props}
    >
      <i className="size-4 icon-[lucide--ellipsis]" />
      <span className="sr-only">More pages</span>
    </span>
  )
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  paginationLinkVariants,
};
