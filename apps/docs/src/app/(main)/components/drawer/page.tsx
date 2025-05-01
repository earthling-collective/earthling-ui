import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="drawer"
      anatomy="<Drawer><DrawerTrigger /><DrawerContent /></Drawer>"
    />
  );
}
