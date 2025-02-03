import Link from "next/link";
import { Button } from "earthling-ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "earthling-ui/drawer";
import { cookies } from "next/headers";
import earthling from "../icon.png";
import Image from "next/image";
import { componentInformation } from "@/lib/component-info";
import { Input } from "earthling-ui/input";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { Nav } from "./nav";

export default async function ({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value ?? "system";

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="bg-background sticky top-0 z-10 flex flex-row items-center justify-between border-b border-current/10 px-4 py-3">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 hover:opacity-80"
        >
          <Image src={earthling} alt="Earthling" width={32} height={32} />
          <h1 className="font-display font-medium tracking-widest">
            Earthling UI
          </h1>
        </Link>
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm">
            <Link
              href={`https://github.com/earthling-collective/earthling-ui`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--github]" />
              <div>Github</div>
            </Link>
          </Button>
        </div>
        <div className="hidden flex-row items-center gap-2 md:flex">
          <Button asChild size="sm">
            <Link
              href={`https://github.com/earthling-collective/earthling-ui`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--github]" />
              <div>Github</div>
            </Link>
          </Button>
          <Button asChild size="sm" material={"ghost"}>
            <Link
              href={`http://npmjs.com/package/earthling-ui`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--npm]" />
            </Link>
          </Button>
          <Button asChild size="sm" material={"ghost"}>
            <Link
              href={`http://x.com/slowjamsteve`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--x]" />
            </Link>
          </Button>
          <ToggleGroup
            type="single"
            size="sm"
            value={theme}
            onValueChange={async (value) => {
              "use server";
              if (!value) return;
              const jar = await cookies();
              jar.set("theme", value);
            }}
          >
            <ToggleGroupItem value="system">
              <i className="icon-[lucide--computer]" />
            </ToggleGroupItem>
            <ToggleGroupItem value="light">
              <i className="icon-[lucide--sun]" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
              <i className="icon-[lucide--moon]" />
            </ToggleGroupItem>
          </ToggleGroup>
          {/* <Drawer direction="right" modal={false}>
            <DrawerTrigger asChild>
              <Button size="sm" material={"ghost"} shape={"icon"}>
                <i className="icon-[lucide--menu]" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>Hey</DrawerHeader>
            </DrawerContent>
          </Drawer> */}
        </div>
      </header>
      <div className="grid grid-cols-[fit-content(100%)_1fr_fit-content(100%)]">
        <aside className="hidden w-[280px] flex-col justify-end border-r border-[transparent] xl:flex">
          <Nav />
        </aside>
        <main className="col-span-3 flex flex-1 flex-col px-4 xl:col-span-1">
          {children}
        </main>
        <aside className="hidden w-[280px] flex-col border-l border-transparent xl:flex"></aside>
      </div>
    </div>
  );
}
