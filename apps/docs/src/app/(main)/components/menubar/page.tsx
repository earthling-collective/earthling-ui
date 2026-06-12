import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("menubar");

export default async function () {
  return (
    <ComponentSublayout
      path="menubar"
      anatomy={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger />
    <MenubarContent>
      <MenubarItem />
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger />
        <MenubarSubContent />
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
    />
  );
}
