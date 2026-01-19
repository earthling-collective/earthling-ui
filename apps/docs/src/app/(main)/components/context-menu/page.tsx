import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="context-menu"
      anatomy={`<ContextMenu>
  <ContextMenuTrigger />
  <ContextMenuContent>
    <ContextMenuItem />
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger />
      <ContextMenuSubContent>
        <ContextMenuItem />
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
    />
  );
}
