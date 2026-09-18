import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("dialog");

export default async function () {
  return (
    <ComponentSublayout
      path="dialog"
      anatomy={
        "<Dialog>\n  <DialogTrigger>Edit profile</DialogTrigger>\n  <DialogContent>\n    <DialogExitButton />\n    <DialogHeader>\n      <DialogTitle>Edit profile</DialogTitle>\n      <DialogDescription>\n        Update the details shown to your workspace.\n      </DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <DialogClose>Cancel</DialogClose>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>"
      }
      example={<Example />}
    />
  );
}
