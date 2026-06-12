import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("popover");

export default async function () {
  return (
    <ComponentSublayout
      path="popover"
      anatomy="<Popover><PopoverTrigger /><PopoverContent><PopoverArrow /></PopoverContent></Popover>"
    />
  );
}
