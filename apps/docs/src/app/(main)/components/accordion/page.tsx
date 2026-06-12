import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("accordion");

export default async function () {
  return (
    <ComponentSublayout
      path="accordion"
      anatomy="<Accordion><AccordionItem><AccordionTrigger /><AccordionContent /></AccordionItem></Accordion>"
    />
  );
}
