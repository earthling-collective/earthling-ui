"use client";

import { pageInformation } from "@/lib/page-info";
import { Button } from "earthling-ui/button";
import { DrawerClose } from "earthling-ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <>
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
            <DrawerClose asChild>
              <Link href={href}>
                <i className={icon} />
                <div>{label}</div>
              </Link>
            </DrawerClose>
          </Button>
        ))}
      </div>
      <div className="flex flex-col">
        <Button asChild size="sm" material="ghost" className="justify-start">
          <Link
            href={`https://github.com/earthling-collective/earthling-ui`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-[simple-icons--github]" />
            <div>Github</div>
          </Link>
        </Button>
        <Button asChild size="sm" material="ghost" className="justify-start">
          <Link
            href={`http://npmjs.com/package/earthling-ui`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-[simple-icons--npm]" />
            <div>NPM</div>
          </Link>
        </Button>
      </div>
    </>
  );
};
