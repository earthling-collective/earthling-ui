import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("dropdown-menu");

export default async function () {
  return (
    <ComponentSublayout
      path="dropdown-menu"
      anatomy={`<DropdownMenu>
  <DropdownMenuTrigger />
  <DropdownMenuContent>
    <DropdownMenuItem />
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger />
      <DropdownMenuSubContent>
        <DropdownMenuItem />
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
    />
  );
}
