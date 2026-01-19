import { ComponentSublayout } from "../sublayout";

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
