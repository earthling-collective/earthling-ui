import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "earthling-ui/accordion";

export default function (props: Record<string, any>) {
  return (
    <Accordion {...props}>
      <AccordionItem id="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
