import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("separator");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="separator"
      anatomy={`<Separator decorative={false} aria-label="Section divider" />`}
    />
  );
}
