"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogExitButton,
  DialogFooter,
  DialogForm,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "earthling-ui/dialog";

type DialogExampleProps = ComponentProps<typeof Dialog>;

export default function Example(props: DialogExampleProps) {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent asChild>
        <DialogForm
          className="gap-6"
          action={async () => {
            await Promise.resolve();
          }}
        >
          <DialogExitButton />
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Update the details shown to people in your workspace.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm font-medium">
              Display name
              <input
                className="bg-background focus-visible:ring-outline h-10 rounded-lg border px-3 font-normal outline-none focus-visible:ring-2"
                defaultValue="Mira Chen"
                name="displayName"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Role
              <input
                className="bg-background focus-visible:ring-outline h-10 rounded-lg border px-3 font-normal outline-none focus-visible:ring-2"
                defaultValue="Design systems lead"
                name="role"
              />
            </label>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button material="ghost" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogForm>
      </DialogContent>
    </Dialog>
  );
}
