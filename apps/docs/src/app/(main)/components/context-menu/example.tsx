"use client";

import type { ComponentProps } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "earthling-ui/context-menu";

type ContextMenuExampleProps = ComponentProps<typeof ContextMenu>;

export default function Example(props: ContextMenuExampleProps) {
  return (
    <ContextMenu {...props}>
      <ContextMenuTrigger
        className="bg-background focus-visible:ring-outline flex min-h-44 w-72 flex-col justify-between rounded-xl border p-4 text-start shadow-sm outline-none focus-visible:ring-2"
        tabIndex={0}
      >
        <span className="text-sm font-medium">Quarterly roadmap</span>
        <span className="text-muted-foreground text-xs">
          Right-click or press Shift+F10
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-60">
        <ContextMenuLabel>Roadmap</ContextMenuLabel>
        <ContextMenuItem>
          Open
          <ContextMenuShortcut>Enter</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuCheckboxItem defaultChecked>
          Available offline
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Planning</ContextMenuItem>
            <ContextMenuItem>In progress</ContextMenuItem>
            <ContextMenuItem>Archive</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy link</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
