import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="accordion"
      anatomy="<Accordion><AccordionItem><AccordionTrigger /><AccordionContent /></AccordionItem></Accordion>"
    />
  );
}
