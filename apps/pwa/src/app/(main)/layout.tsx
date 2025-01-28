import Link from "next/link";
import { Button } from "earthling-ui/button";
import { ThemeSwitcher, ThemeSwitcherItem } from "earthling-ui/theme-switcher";
import { cookies } from "next/headers";

export default async function ({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value ?? "system";

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header>
        <div className="container mx-auto flex flex-row items-center justify-between py-4">
          <Button asChild size="sm" variant={"ghost"}>
            <Link href="/" className="flex flex-row items-center gap-2">
              {/* <Image src={earthling} alt="Earthling" width={40} height={40} /> */}
              <h1 className="text-sm font-medium uppercase">Earthling UI</h1>
            </Link>
          </Button>
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
        </div>
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
