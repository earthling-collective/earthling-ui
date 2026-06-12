import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "earthling-ui/navigation-menu";

export default function (props: Record<string, any>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-1 p-1">
              <NavigationMenuLink href="#">
                <div className="font-medium">Introduction</div>
                <div className="text-muted-foreground text-xs">
                  Build accessible apps with Earthling UI.
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="font-medium">Installation</div>
                <div className="text-muted-foreground text-xs">
                  How to install and configure the library.
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-1 p-1">
              <NavigationMenuLink href="#">
                <div className="font-medium">Button</div>
                <div className="text-muted-foreground text-xs">
                  Trigger actions with a click.
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="font-medium">Dialog</div>
                <div className="text-muted-foreground text-xs">
                  Modal windows for focused tasks.
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="group inline-flex h-10 w-max items-center justify-center rounded-control px-4 py-2 text-sm font-medium"
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
