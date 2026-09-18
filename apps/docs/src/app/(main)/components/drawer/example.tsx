"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "earthling-ui/drawer";

type DrawerExampleProps = ComponentProps<typeof Drawer>;

export default function Example({
  position = "bottom",
  ...props
}: DrawerExampleProps) {
  const isSideDrawer = position === "left" || position === "right";

  return (
    <Drawer position={position} {...props}>
      <DrawerTrigger asChild>
        <Button material="outline">Review filters</Button>
      </DrawerTrigger>
      <DrawerContent
        className={isSideDrawer ? "h-full w-96" : "mx-auto w-full max-w-lg"}
      >
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle>Filter activity</DrawerTitle>
            <DrawerDescription>
              Narrow the activity feed by status and ownership.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-3 px-4 pb-2">
            <label className="flex items-center justify-between gap-4 rounded-lg border p-3 text-sm">
              Assigned to me
              <input className="size-4" defaultChecked type="checkbox" />
            </label>
            <label className="flex items-center justify-between gap-4 rounded-lg border p-3 text-sm">
              Needs review
              <input className="size-4" type="checkbox" />
            </label>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Apply filters</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button material="ghost">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
