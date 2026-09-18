import type { ReactNode } from "react";
import { Toc } from "@/components/toc";
export default function GuideLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main
        id="main-content"
        className="min-w-0 px-5 py-10 sm:px-8 lg:px-10 lg:py-12"
      >
        <article className="docs-prose prose mx-auto max-w-3xl">
          {children}
        </article>
      </main>
      <aside className="hidden xl:block">
        <Toc />
      </aside>
    </>
  );
}
