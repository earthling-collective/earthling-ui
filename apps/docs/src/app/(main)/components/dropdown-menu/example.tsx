"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "earthling-ui/dropdown-menu";

type DropdownMenuExampleProps = ComponentProps<typeof DropdownMenu>;

export default function Example(props: DropdownMenuExampleProps) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button material="outline">
          Workspace
          <i
            aria-hidden="true"
            className="icon-[lucide--chevron-down] size-4"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>Acme Studio</DropdownMenuLabel>
        <DropdownMenuItem>
          Command palette
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Workspace settings</DropdownMenuItem>
        <DropdownMenuCheckboxItem defaultChecked>
          Show completed tasks
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Switch workspace</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>Acme Studio</DropdownMenuItem>
            <DropdownMenuItem>Personal</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
