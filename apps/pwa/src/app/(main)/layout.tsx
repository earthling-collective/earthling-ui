import Link from "next/link";
import { Button } from "earthling-ui/button";
import { ThemeSwitcher, ThemeSwitcherItem } from "earthling-ui/theme-switcher";
import { cookies } from "next/headers";
import earthling from "../icon.png";
import Image from "next/image";
import { componentInformation } from "@/lib/component-info";
import { Input } from "earthling-ui/input";

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
          <ThemeSwitcher>
            <ThemeSwitcherItem
              checked={theme === "system"}
              onCheckedChange={async (checked: boolean) => {
                "use server";
                if (!checked) return;
                const jar = await cookies();
                jar.set("theme", "system");
              }}
            >
              <i className="icon-[lucide--computer]" />
            </ThemeSwitcherItem>
            <ThemeSwitcherItem
              checked={theme === "light"}
              onCheckedChange={async (checked: boolean) => {
                "use server";
                if (!checked) return;
                const jar = await cookies();
                jar.set("theme", "light");
              }}
            >
              <i className="icon-[lucide--sun]" />
            </ThemeSwitcherItem>
            <ThemeSwitcherItem
              checked={theme === "dark"}
              onCheckedChange={async (checked: boolean) => {
                "use server";
                if (!checked) return;
                const jar = await cookies();
                jar.set("theme", "dark");
              }}
            >
              <i className="icon-[lucide--moon]" />
            </ThemeSwitcherItem>
          </ThemeSwitcher>
        </div>
      </header>
      <div className="grid grid-cols-[fit-content(100%)_1fr_fit-content(100%)]">
        <aside className="hidden w-[280px] flex-col justify-end border-r border-[transparent] xl:flex">
          <nav className="sticky bottom-0 flex min-h-[calc(100vh-72px)] flex-col p-4">
            <Input placeholder="Search components..." className="mb-2" />
            {componentInformation
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((info) => (
                <Button
                  key={info.path}
                  material="ghost"
                  size="sm"
                  asChild
                  className="justify-start"
                >
                  <Link href={`/components/${info.path}`}>{info.name}</Link>
                </Button>
              ))}
          </nav>
        </aside>
        <main className="col-span-3 flex flex-1 flex-col px-4 xl:col-span-1">
          {children}
        </main>
        <aside className="hidden w-[280px] flex-col border-l border-transparent xl:flex"></aside>
      </div>
    </div>
  );
}
