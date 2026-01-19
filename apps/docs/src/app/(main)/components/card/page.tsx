import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="card"
      anatomy={`<Card>
  <CardHeader>
    <CardTitle />
    <CardDescription />
  </CardHeader>
  <CardContent />
  <CardFooter />
</Card>`}
    />
  );
}
