import Link from "next/link";
import { Button } from "earthling-ui/button";
import { cookies } from "next/headers";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { Nav } from "./nav";
import { Drawer, DrawerContent, DrawerTrigger } from "earthling-ui/drawer";
import { pageInformation } from "@/lib/page-info";
import { MobileNav } from "./mobile-nav";

export default async function ({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value ?? "system";

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="bg-background/50 sticky top-0 z-10 flex flex-row items-center justify-between border-b px-4 py-3 backdrop-blur-lg">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 hover:opacity-80"
        >
          <h1 className="font-display font-medium tracking-widest">
            Earthling UI
          </h1>
        </Link>
        <div className="flex flex-row items-center gap-2">
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
          <Button
            asChild
            size="sm"
            material={"ghost"}
            className="hidden md:flex"
          >
            <Link
              href={`http://npmjs.com/package/earthling-ui`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--npm]" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            material={"ghost"}
            className="hidden md:flex"
          >
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
            className="hidden md:block"
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
          <Drawer position="right">
            <DrawerTrigger asChild>
              <Button
                size="sm"
                material={"ghost"}
                shape={"icon"}
                className="md:hidden"
              >
                <i className="icon-[lucide--menu]" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex w-[280px] flex-col gap-2 p-4">
                <MobileNav />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
      <div className="grid grid-cols-[auto_1fr_auto]">
        <aside className="hidden w-[280px] flex-col justify-end border-r border-[transparent] xl:flex">
          <Nav />
        </aside>
        {children}
      </div>
      <footer className="mt-4 flex flex-row items-center justify-center gap-4 border-t py-4 text-center">
        <div className="font-display text-xs">Earthling UI</div>
        <Link
          href="https://github.com/earthling-collective/earthling-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-xs underline hover:no-underline"
        >
          GitHub
        </Link>
        <Link
          href="https://www.npmjs.com/package/earthling-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-xs underline hover:no-underline"
        >
          NPM
        </Link>
        <div className="text-muted-foreground max-w-md text-center text-xs">
          Created by{" "}
          <Link
            href="https://stevenfrady.com"
            target="_blank"
            className="underline hover:no-underline"
          >
            Steven Frady
          </Link>
          .
        </div>
      </footer>
    </div>
  );
}
