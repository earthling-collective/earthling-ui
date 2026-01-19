import { ComponentSublayout } from "../sublayout";

export default async function () {
  return <ComponentSublayout path="progress" anatomy={`<Progress value={50} />`} />;
}
