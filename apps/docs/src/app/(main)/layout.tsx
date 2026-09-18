import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "earthling-ui/button";
import { Search } from "@/components/search";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { ThemeSwitch } from "./theme-switch";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedTheme = (await cookies()).get("theme")?.value;
  const theme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : "system";
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="bg-background fixed top-3 left-3 z-50 -translate-y-24 rounded-lg border px-4 py-2 focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="bg-background/90 sticky top-0 z-40 h-16 border-b backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-2 px-3 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <MobileNav />
            <Link
              href="/"
              aria-label="Earthling UI home"
              className="font-display text-base tracking-tight sm:text-lg"
            >
              earthling
              <span className="text-muted-foreground ml-1.5 font-sans text-xs font-medium tracking-normal">
                UI
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Search className="h-8 w-9 px-2 sm:w-56" />
            <div className="hidden h-5 border-l sm:block" />
            <ThemeSwitch initialTheme={theme} />
            <Button
              asChild
              material="ghost"
              scheme="neutral"
              size="sm"
              shape="icon"
              className="hidden sm:inline-flex"
            >
              <a
                href="https://github.com/earthling-dev/earthling-ui"
                aria-label="Earthling UI on GitHub"
              >
                <i aria-hidden="true" className="icon-[simple-icons--github]" />
              </a>
            </Button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
        <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] overflow-y-auto border-r lg:block">
          <Nav />
        </aside>
        {children}
      </div>
      <footer className="text-muted-foreground border-t px-6 py-6 text-xs">
        <div className="mx-auto flex max-w-[1552px] flex-wrap items-center justify-between gap-4">
          <p>
            Earthling UI · Made by{" "}
            <a
              className="hover:text-foreground underline underline-offset-4"
              href="https://stevenfrady.com"
            >
              Steven Frady
            </a>
          </p>
          <div className="flex gap-5">
            <a
              className="hover:text-foreground"
              href="https://github.com/earthling-dev/earthling-ui"
            >
              GitHub
            </a>
            <a
              className="hover:text-foreground"
              href="https://www.npmjs.com/package/earthling-ui"
            >
              npm
            </a>
            <a className="hover:text-foreground" href="/llms.txt">
              llms.txt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
