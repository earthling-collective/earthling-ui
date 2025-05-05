import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="dialog"
      anatomy="<Dialog><DialogTrigger /><DialogContent><DialogHeader><DialogTitle /><DialogDescription /></DialogHeader><DialogFooter /></DialogContent></Dialog>"
    />
  );
}
