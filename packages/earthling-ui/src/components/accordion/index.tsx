"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { cn } from "@/utils/cn";
import {
  DisclosureGroup,
  Disclosure,
  DisclosurePanel,
  Header,
  Button,
} from "react-aria-components";
import { cva } from "class-variance-authority";

// Accordion
const Accordion = forwardRef<
  ComponentRef<typeof DisclosureGroup>,
  ComponentPropsWithoutRef<typeof DisclosureGroup>
>(({ className, ...props }, ref) => (
  <DisclosureGroup ref={ref} {...props} className={cn("w-full", className)} />
));

// AccordionItem
const accordionItemVariants = cva("border-b last:border-b-0");

const AccordionItem = forwardRef<
  ComponentRef<typeof Disclosure>,
  ComponentPropsWithoutRef<typeof Disclosure>
>(({ className, ...props }, ref) => (
  <Disclosure
    ref={ref}
    className={cn(accordionItemVariants(), className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger
const accordionTriggerVariants = cva("flex");

const accordionTriggerButtonVariants = cva(
  "flex flex-1 items-center justify-between gap-2 py-4 font-medium transition-all hover:underline group outline-none focus-visible:ring-2 focus-visible:ring-outline cursor-pointer"
);

const AccordionTrigger = forwardRef<
  ComponentRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Header className={cn(accordionTriggerVariants())}>
    <Button
      slot={"trigger"}
      ref={ref}
      className={cn(accordionTriggerButtonVariants(), className)}
      {...props}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <>
          {children}
          <i className="icon-[lucide--chevron-down] shrink-0 transition-transform duration-200 group-aria-[expanded=true]:rotate-180" />
        </>
      )}
    </Button>
  </Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent
const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
);

const AccordionContent = forwardRef<
  ComponentRef<typeof DisclosurePanel>,
  ComponentPropsWithoutRef<typeof DisclosurePanel>
>(({ className, children, ...props }, ref) => (
  <DisclosurePanel
    ref={ref}
    className={cn(accordionContentVariants(), className)}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </DisclosurePanel>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
