"use client";

import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "earthling-ui/navigation-menu";

type NavigationMenuExampleProps = ComponentProps<typeof NavigationMenu>;

const links = [
  {
    description: "Install the package and configure your styles.",
    href: "/getting-started",
    title: "Getting started",
  },
  {
    description: "Compose accessible primitives for product interfaces.",
    href: "/#components",
    title: "Components",
  },
  {
    description: "Use color, spacing, and typography consistently.",
    href: "/theming",
    title: "Themes",
  },
];

export default function Example(props: NavigationMenuExampleProps) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[min(22rem,calc(100vw-3rem))] gap-1 p-1">
              {links.map((link) => (
                <NavigationMenuLink href={link.href} key={link.title}>
                  <span className="font-medium">{link.title}</span>
                  <span className="text-muted-foreground text-xs">
                    {link.description}
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:bg-primary/5 focus-visible:ring-outline inline-flex h-10 items-center rounded-lg px-4 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
            href="/#components"
          >
            All components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
