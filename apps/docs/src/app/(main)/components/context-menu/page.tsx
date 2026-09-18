import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("context-menu");

export default async function () {
  return (
    <ComponentSublayout
      path="context-menu"
      anatomy={
        "<ContextMenu>\n  <ContextMenuTrigger>Quarterly roadmap</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuLabel>Roadmap</ContextMenuLabel>\n    <ContextMenuItem>Open</ContextMenuItem>\n    <ContextMenuSeparator />\n    <ContextMenuSub>\n      <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>\n      <ContextMenuSubContent>\n        <ContextMenuItem>Archive</ContextMenuItem>\n      </ContextMenuSubContent>\n    </ContextMenuSub>\n  </ContextMenuContent>\n</ContextMenu>"
      }
      example={<Example />}
    />
  );
}
