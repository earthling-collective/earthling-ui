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
  composeRenderProps,
} from "react-aria-components";

// Accordion
const Accordion = forwardRef<
  ComponentRef<typeof DisclosureGroup>,
  ComponentPropsWithoutRef<typeof DisclosureGroup>
>(({ className, ...props }, ref) => (
  <DisclosureGroup
    ref={ref}
    {...props}
    className={composeRenderProps(className, (className) =>
      cn("w-full", className),
    )}
  />
));
Accordion.displayName = "Accordion";

// AccordionItem
const AccordionItem = forwardRef<
  ComponentRef<typeof Disclosure>,
  ComponentPropsWithoutRef<typeof Disclosure>
>(({ className, ...props }, ref) => (
  <Disclosure
    ref={ref}
    className={composeRenderProps(className, (className) =>
      cn("border-b last:border-b-0", className),
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger
const AccordionTrigger = forwardRef<
  ComponentRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Button
      slot="trigger"
      ref={ref}
      className={composeRenderProps(className, (className) =>
        cn(
          "group flex flex-1 cursor-pointer items-center justify-between gap-3 rounded-sm py-4 text-left font-medium outline-none hover:underline focus-visible:ring-2 focus-visible:ring-outline",
          className,
        ),
      )}
      {...props}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <>
          {children}
          <i
            aria-hidden="true"
            className="icon-[lucide--chevron-down] shrink-0 transition-transform duration-200 ease-out group-aria-[expanded=true]:rotate-180 motion-reduce:transition-none"
          />
        </>
      )}
    </Button>
  </Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent
const AccordionContent = forwardRef<
  ComponentRef<typeof DisclosurePanel>,
  ComponentPropsWithoutRef<typeof DisclosurePanel>
>(({ className, children, ...props }, ref) => (
  <DisclosurePanel
    ref={ref}
    className={composeRenderProps(className, (className) =>
      cn(
        "h-[var(--disclosure-panel-height)] overflow-hidden text-sm transition-[height] duration-200 ease-out motion-reduce:transition-none",
        className,
      ),
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </DisclosurePanel>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
