"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { cn } from "@/utils/cn";
import {
  DisclosureGroup as DisclosureGroupPrimitive,
  Disclosure as DisclosurePrimitive,
  DisclosurePanel as DisclosurePanelPrimitive,
  Header as HeaderPrimitive,
  Button as ButtonPrimitive,
} from "react-aria-components";
import { cva } from "class-variance-authority";

// Accordion
const Accordion = DisclosureGroupPrimitive;

// AccordionItem
const accordionItemVariants = cva("border-b last:border-b-0");

const AccordionItem = forwardRef<
  ComponentRef<typeof DisclosurePrimitive>,
  ComponentPropsWithoutRef<typeof DisclosurePrimitive>
>(({ className, ...props }, ref) => (
  <DisclosurePrimitive
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
  ComponentRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive>
>(({ className, children, ...props }, ref) => (
  <HeaderPrimitive className={cn(accordionTriggerVariants())}>
    <ButtonPrimitive
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
    </ButtonPrimitive>
  </HeaderPrimitive>
));
AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent
const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
);

const AccordionContent = forwardRef<
  ComponentRef<typeof DisclosurePanelPrimitive>,
  ComponentPropsWithoutRef<typeof DisclosurePanelPrimitive>
>(({ className, children, ...props }, ref) => (
  <DisclosurePanelPrimitive
    ref={ref}
    className={cn(accordionContentVariants(), className)}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </DisclosurePanelPrimitive>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
