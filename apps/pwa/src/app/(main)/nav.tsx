"use client";

import { componentInformation } from "@/lib/component-info";
import { Button } from "earthling-ui/button";
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
          },
          {
            href: "/cli",
            label: "CLI",
            icon: "icon-[lucide--square-terminal]",
          },
          {
            href: "/changelog",
            label: "Latest updates",
            icon: "icon-[lucide--git-pull-request-arrow]",
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

      <div className="flex flex-col">
        {componentInformation
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((x) => x.status !== "future")
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
              <Link href={`/components/${info.path}`}>{info.name}</Link>
            </Button>
          ))}
      </div>
    </nav>
  );
};
