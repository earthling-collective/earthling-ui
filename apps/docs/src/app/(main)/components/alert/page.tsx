import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("alert");

export default async function () {
  return (
    <ComponentSublayout
      path="alert"
      anatomy={`<Alert>
  <AlertTitle />
  <AlertDescription />
</Alert>`}
    />
  );
}
