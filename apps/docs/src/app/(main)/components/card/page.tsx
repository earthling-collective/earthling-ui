import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("card");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="card"
      anatomy={`<Card material="paper">
  <CardHeader>
    <CardTitle>Weekly digest</CardTitle>
    <CardDescription>Activity across your workspace.</CardDescription>
  </CardHeader>
  <CardContent>24 updates from 8 contributors.</CardContent>
  <CardFooter><button type="button">Open digest</button></CardFooter>
</Card>`}
    />
  );
}
