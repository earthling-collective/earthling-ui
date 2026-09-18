import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("dropdown-menu");

export default async function () {
  return (
    <ComponentSublayout
      path="dropdown-menu"
      anatomy={
        "<DropdownMenu>\n  <DropdownMenuTrigger>Workspace</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Acme Studio</DropdownMenuLabel>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuSub>\n      <DropdownMenuSubTrigger>Switch workspace</DropdownMenuSubTrigger>\n      <DropdownMenuSubContent>\n        <DropdownMenuItem>Personal</DropdownMenuItem>\n      </DropdownMenuSubContent>\n    </DropdownMenuSub>\n  </DropdownMenuContent>\n</DropdownMenu>"
      }
      example={<Example />}
    />
  );
}
