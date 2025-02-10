"use client";

import { componentInformation } from "@/lib/component-info";
import { pageInformation } from "@/lib/page-info";
import { Button } from "earthling-ui/button";
import { Separator } from "earthling-ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky bottom-0 flex min-h-[calc(100vh-61px)] flex-col gap-2 p-4">
      <Button className="mb-2 justify-start" material="paper" scheme={"muted"}>
        <i className="icon-[lucide--search]" />
        <div>Search...</div>
      </Button>

      <div className="flex flex-col">
        {pageInformation.map(({ href, label, icon }) => (
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
          .map((info) => (
            <Button
              key={info.path}
              material="ghost"
              size="sm"
              asChild
              aria-pressed={pathname === `/components/${info.path}`}
              className="justify-start"
            >
              <Link href={`/components/${info.path}`}>{info.name}</Link>
            </Button>
          ))}
      </div>
    </nav>
  );
};
