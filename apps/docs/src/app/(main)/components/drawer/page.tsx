import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("drawer");

export default async function () {
  return (
    <ComponentSublayout
      path="drawer"
      anatomy={
        '<Drawer position="bottom">\n  <DrawerTrigger>Review filters</DrawerTrigger>\n  <DrawerContent>\n    <div className="flex min-w-0 flex-1 flex-col">\n    <DrawerHeader>\n      <DrawerTitle>Filter activity</DrawerTitle>\n      <DrawerDescription>\n        Narrow the activity feed by status.\n      </DrawerDescription>\n    </DrawerHeader>\n    <DrawerFooter>\n      <DrawerClose>Close</DrawerClose>\n    </DrawerFooter>\n      </div>\n  </DrawerContent>\n</Drawer>'
      }
      example={<Example />}
    />
  );
}
