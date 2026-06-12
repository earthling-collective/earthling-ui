import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("dialog");

export default async function () {
  return (
    <ComponentSublayout
      path="dialog"
      anatomy="<Dialog><DialogTrigger /><DialogContent><DialogHeader><DialogExitButton /><DialogTitle /><DialogDescription /></DialogHeader><DialogFooter /></DialogContent></Dialog>"
    />
  );
}
