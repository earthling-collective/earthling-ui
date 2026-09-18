import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("navigation-menu");

export default async function () {
  return (
    <ComponentSublayout
      path="navigation-menu"
      anatomy={
        '<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Explore</NavigationMenuTrigger>\n      <NavigationMenuContent>\n        <NavigationMenuLink href="/getting-started">\n          Getting started\n        </NavigationMenuLink>\n      </NavigationMenuContent>\n      <NavigationMenuIndicator />\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>'
      }
      example={<Example />}
    />
  );
}
