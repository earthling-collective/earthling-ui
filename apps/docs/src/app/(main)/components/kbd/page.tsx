import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("kbd");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="kbd"
      anatomy={`<Kbd size="md">Ctrl</Kbd>`}
    />
  );
}
