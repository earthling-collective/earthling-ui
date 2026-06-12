"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "earthling-ui/dialog";
import { Button } from "earthling-ui/button";
import { Kbd } from "earthling-ui/kbd";
import { cn } from "earthling-ui/utils/cn";
import { componentInformation } from "@/lib/component-info";
import { pageInformation } from "@/lib/page-info";

type SearchEntry = {
  label: string;
  description: string;
  href: string;
  icon: string;
  group: "Pages" | "Components";
};

const searchIndex: SearchEntry[] = [
  ...pageInformation.map((page) => ({
    label: page.label,
    description: page.description,
    href: page.href,
    icon: page.icon,
    group: "Pages" as const,
  })),
  ...[...componentInformation]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((component) => ({
      label: component.name,
      description: component.description,
      href: `/components/${component.path}`,
      icon: "icon-[lucide--component]",
      group: "Components" as const,
    })),
];

function matchScore(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase();
  const label = entry.label.toLowerCase();
  if (label === q) return 4;
  if (label.startsWith(q)) return 3;
  if (label.includes(q)) return 2;
  if (entry.description.toLowerCase().includes(q)) return 1;
  return 0;
}

export function Search({ className }: { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex;
    return searchIndex
      .map((entry) => ({ entry, score: matchScore(entry, query.trim()) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ entry }) => entry);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        material="paper"
        scheme="muted"
        className={cn("justify-start", className)}
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
      >
        <i className="icon-[lucide--search]" />
        <div className="flex-1 text-left">Search...</div>
        <Kbd size="sm" className="max-md:hidden">
          Ctrl K
        </Kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-24 max-w-lg translate-y-0 gap-0 overflow-hidden p-0">
          <DialogTitle className="sr-only">Search documentation</DialogTitle>
          <div className="flex items-center gap-2 border-b px-4">
            <i className="text-muted-foreground size-4 shrink-0 icon-[lucide--search]" />
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveIndex((i) => Math.min(i + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveIndex((i) => Math.max(i - 1, 0));
                } else if (e.key === "Enter" && results[activeIndex]) {
                  e.preventDefault();
                  navigate(results[activeIndex].href);
                }
              }}
              placeholder="Search components and pages…"
              className="placeholder:text-muted-foreground h-12 w-full bg-transparent text-sm outline-none"
              role="combobox"
              aria-expanded="true"
              aria-controls="search-results"
              aria-activedescendant={
                results[activeIndex]
                  ? `search-result-${activeIndex}`
                  : undefined
              }
            />
          </div>
          <ul
            id="search-results"
            role="listbox"
            aria-label="Search results"
            className="max-h-80 overflow-y-auto p-2"
          >
            {results.length === 0 && (
              <li className="text-muted-foreground px-3 py-8 text-center text-sm">
                No results for “{query}”
              </li>
            )}
            {results.map((entry, i) => {
              const showGroup = i === 0 || results[i - 1].group !== entry.group;
              return (
                <li key={entry.href} role="presentation">
                  {showGroup && (
                    <div className="text-muted-foreground px-3 pt-3 pb-1 text-xs font-medium">
                      {entry.group}
                    </div>
                  )}
                  <Link
                    id={`search-result-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    href={entry.href}
                    onClick={() => setOpen(false)}
                    onMouseMove={() => setActiveIndex(i)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
                      i === activeIndex && "bg-(--color-primary)/10",
                    )}
                  >
                    <i className={cn("size-4 shrink-0", entry.icon)} />
                    <div className="min-w-0">
                      <div className="font-medium">{entry.label}</div>
                      <div className="text-muted-foreground truncate text-xs">
                        {entry.description}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
