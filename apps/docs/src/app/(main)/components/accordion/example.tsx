"use client";

import type { ComponentProps } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "earthling-ui/accordion";

type AccordionExampleProps = Pick<
  ComponentProps<typeof Accordion>,
  "allowsMultipleExpanded" | "isDisabled"
>;

export default function Example(props: AccordionExampleProps) {
  return (
    <Accordion
      className="max-w-xl"
      defaultExpandedKeys={["shipping"]}
      {...props}
    >
      <AccordionItem id="shipping">
        <AccordionTrigger>When will my order ship?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Orders placed before 2 PM usually leave our studio the same business
          day. We will email tracking details as soon as the carrier scans it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="returns">
        <AccordionTrigger>Can I return an item?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Unused items can be returned within 30 days in their original
          packaging.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="international">
        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Yes. Duties and delivery estimates appear at checkout for supported
          destinations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
