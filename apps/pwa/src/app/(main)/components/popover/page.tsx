import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="popover"
      anatomy="<Popover><PopoverTrigger /><PopoverContent><PopoverArrow /></PopoverContent></Popover>"
    />
  );
}
