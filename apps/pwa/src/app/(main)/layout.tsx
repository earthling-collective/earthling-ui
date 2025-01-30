import Link from "next/link";
import { Button } from "earthling-ui/button";
import { ThemeSwitcher, ThemeSwitcherItem } from "earthling-ui/theme-switcher";
import { cookies } from "next/headers";
import earthling from "../icon.png";
import Image from "next/image";

export default async function ({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value ?? "system";

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="bg-background sticky top-0 z-10 flex flex-row items-center justify-between border-b border-current/10 p-4">
        <Link
          href="/"
          className="flex flex-row items-center gap-3 hover:opacity-80"
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
          <Button asChild size="sm" variant={"ghost"}>
            <Link
              href={`http://npmjs.com/package/earthling-ui`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-[simple-icons--npm]" />
            </Link>
          </Button>
          <Button asChild size="sm" variant={"ghost"}>
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
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
