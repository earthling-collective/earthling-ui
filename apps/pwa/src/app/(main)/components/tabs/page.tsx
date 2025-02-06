import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="tabs"
      anatomy="<Tabs><TabsList><Tab /></TabsList><TabPanel /></Tabs>"
    />
  );
}
