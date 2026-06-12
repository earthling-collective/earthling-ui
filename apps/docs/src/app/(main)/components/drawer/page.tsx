import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("drawer");

export default async function () {
  return (
    <ComponentSublayout
      path="drawer"
      anatomy="<Drawer><DrawerTrigger /><DrawerContent /></Drawer>"
    />
  );
}
