"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "earthling-ui/utils/cn";

type Heading = { id: string; text: string; level: number };

/**
 * Table of contents for prose pages. Scans the rendered article for h2/h3
 * headings (ids come from rehype-slug) and highlights the one in view.
 */
export function Toc({ className }: { className?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        "article h2[id], article h3[id]",
      ),
    );
    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName === "H2" ? 2 : 3,
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className={cn("sticky top-[61px] flex flex-col gap-2 p-4", className)}
    >
      <div className="my-12 flex flex-col">
        <div className="text-muted-foreground mb-2 px-3 text-xs font-medium">
          On this page
        </div>
        {headings.map(({ id, text, level }) => (
          <Link
            key={id}
            href={`#${id}`}
            data-active={activeId === id}
            className={cn(
              "text-muted-foreground hover:text-foreground data-[active=true]:text-foreground border-l-2 border-transparent px-3 py-1 text-sm font-medium transition-colors data-[active=true]:border-current",
              level === 3 && "pl-6",
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
