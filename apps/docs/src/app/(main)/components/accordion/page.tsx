import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("accordion");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="accordion"
      anatomy={`<Accordion defaultExpandedKeys={["shipping"]}>
  <AccordionItem id="shipping">
    <AccordionTrigger>When will my order ship?</AccordionTrigger>
    <AccordionContent>Orders usually ship within one business day.</AccordionContent>
  </AccordionItem>
</Accordion>`}
    />
  );
}
