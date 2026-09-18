import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("badge");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="badge"
      anatomy={`<Badge scheme="good">Operational</Badge>`}
    />
  );
}
