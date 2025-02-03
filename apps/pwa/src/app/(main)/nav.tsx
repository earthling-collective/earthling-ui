"use client";

import { componentInformation } from "@/lib/component-info";
import { Button } from "earthling-ui/button";
import { Separator } from "earthling-ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky bottom-0 flex min-h-[calc(100vh-61px)] flex-col gap-2 p-4">
      <Button
        className="text-foreground/50 mb-2 justify-start"
        material="outline"
      >
        <i className="icon-[lucide--search]" />
        <div>Search...</div>
      </Button>

      <div className="flex flex-col">
        {[
          {
            href: "/getting-started",
            label: "Getting Started",
            icon: "icon-[lucide--rocket]",
            description:
              "Learn how to install Earthling UI and start building your first project.",
          },
          {
            href: "/cli",
            label: "CLI",
            icon: "icon-[lucide--square-terminal]",
            description:
              "Learn how to use the CLI tool to create projects and manage components.",
          },
          {
            href: "/theming",
            label: "Theming",
            icon: "icon-[lucide--palette]",
            description:
              "Learn how to customize your theme and find the default theme.",
          },
          {
            href: "/changelog",
            label: "Latest updates",
            icon: "icon-[lucide--git-pull-request-arrow]",
            description:
              "Learn about the latest changes and improvements to Earthling UI.",
          },
        ].map(({ href, label, icon }) => (
          <Button
            key={href}
            material={"ghost"}
            size={"sm"}
            className="justify-start"
            aria-pressed={pathname === href}
            asChild
          >
            <Link href={href}>
              <i className={icon} />
              <div>{label}</div>
            </Link>
          </Button>
        ))}
      </div>

      <Separator className="mx-3 w-auto" />

      <div className="flex flex-col">
        {componentInformation
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter(
            (x) =>
              process.env.NODE_ENV === "development" || x.status !== "future",
          )
          .map((info) => (
            <Button
              key={info.path}
              material="ghost"
              size="sm"
              asChild
              aria-pressed={pathname === `/components/${info.path}`}
              disabled={info.status === "future"}
              className="justify-start"
            >
              <Link href={`/components/${info.path}`}>
                {info.name}
                {info.status === `wip` && ` 🚧`}
              </Link>
            </Button>
          ))}
      </div>
    </nav>
  );
};
