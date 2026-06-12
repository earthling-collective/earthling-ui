import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("select");

export default async function () {
  return (
    <ComponentSublayout
      path="select"
      anatomy="<Select><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem /></SelectContent></Select>"
    />
  );
}
