import { cn } from "earthling-ui/utils/cn";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function ({ children }: { children: ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value;

  return (
    <>
      <main className="col-span-3 flex flex-1 flex-col px-4 xl:col-span-1">
        <div className="container mx-auto max-w-3xl py-10 md:my-4">
          <article
            className={cn(
              "prose prose-neutral max-w-none",
              (!theme || theme === "system") && "dark:prose-invert",
              theme === "dark" && "prose-invert",
            )}
          >
            {children}
          </article>
        </div>
      </main>
      <aside className="hidden w-[280px] flex-col border-l border-transparent xl:flex"></aside>
    </>
  );
}
