import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("tabs");

export default async function () {
  return (
    <ComponentSublayout
      path="tabs"
      anatomy="<Tabs><TabsList><Tab /></TabsList><TabPanel /></Tabs>"
    />
  );
}
