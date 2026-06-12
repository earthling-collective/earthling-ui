import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("toggle-group");

export default async function () {
  return (
    <ComponentSublayout
      path="toggle-group"
      anatomy="<ToggleGroup><ToggleGroupItem /></ToggleGroup>"
    />
  );
}
