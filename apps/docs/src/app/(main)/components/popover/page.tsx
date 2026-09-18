import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("popover");

export default async function () {
  return (
    <ComponentSublayout
      path="popover"
      anatomy={
        "<Popover>\n  <PopoverTrigger>Delivery details</PopoverTrigger>\n  <PopoverContent>\n    <PopoverArrow />\n    Choose where status updates should be sent.\n  </PopoverContent>\n</Popover>"
      }
      example={<Example />}
    />
  );
}
