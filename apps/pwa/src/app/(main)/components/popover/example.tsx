import { Button } from "earthling-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "earthling-ui/popover";

export default function (props: Record<string, any>) {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        Lorem ipsum dolor sit amet
      </PopoverContent>
    </Popover>
  );
}
