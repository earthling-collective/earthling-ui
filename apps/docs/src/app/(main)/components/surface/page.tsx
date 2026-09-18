import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("surface");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="surface"
      anatomy={`<Surface material="paper">
  <h3>Storage</h3>
  <p>18.4 GB of 50 GB used.</p>
</Surface>`}
    />
  );
}
