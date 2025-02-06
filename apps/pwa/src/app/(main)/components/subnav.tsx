"use client";

import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "earthling-ui/utils/cn";
import { useScrollSpy } from "@/utils/use-scroll-spy";

export function Subnav({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  const active = useScrollSpy(["sandbox", "anatomy", "installation"]);

  return (
    <nav
      className={cn("sticky top-[61px] flex flex-col gap-2 p-4", className)}
      {...rest}
    >
      <div className="my-12 flex flex-col">
        {[
          { id: "sandbox", title: "Sandbox" },
          { id: "anatomy", title: "Anatomy" },
          { id: "installation", title: "Installation" },
        ].map(({ id, title }) => (
          <Link
            key={id}
            href={`#${id}`}
            data-active={active.includes(id)}
            className={
              "text-muted-foreground hover:text-foreground data-[active=true]:text-foreground -scroll-mt-[61px] border-l-2 px-3 py-1 text-sm font-medium transition-colors data-[active=true]:border-l-2 data-[active=true]:border-current"
            }
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
