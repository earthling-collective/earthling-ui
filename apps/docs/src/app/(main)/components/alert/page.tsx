import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("alert");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="alert"
      anatomy={`<Alert scheme="good">
  <AlertTitle>Deployment ready</AlertTitle>
  <AlertDescription>Your changes passed every check.</AlertDescription>
</Alert>`}
    />
  );
}
