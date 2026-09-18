import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("menubar");

export default async function () {
  return (
    <ComponentSublayout
      path="menubar"
      anatomy={
        "<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>New document</MenubarItem>\n      <MenubarSeparator />\n      <MenubarSub>\n        <MenubarSubTrigger>Share</MenubarSubTrigger>\n        <MenubarSubContent>\n          <MenubarItem>Copy link</MenubarItem>\n        </MenubarSubContent>\n      </MenubarSub>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>"
      }
      example={<Example />}
    />
  );
}
