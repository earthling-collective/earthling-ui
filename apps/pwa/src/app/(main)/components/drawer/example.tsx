import { Button } from "earthling-ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "earthling-ui/drawer";

export default function (props: Record<string, any>) {
  return (
    <Drawer {...props}>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-50 w-50" />
      </DrawerContent>
    </Drawer>
  );
}
