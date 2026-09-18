import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("button");

export default async function Page() {
  return (
    <ComponentSublayout
      path="button"
      anatomy={'<Button type="button">Create project</Button>'}
      example={<Example />}
    />
  );
}
