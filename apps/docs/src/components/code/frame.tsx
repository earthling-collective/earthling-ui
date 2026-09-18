"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Button } from "earthling-ui/button";
import { cn } from "earthling-ui/utils/cn";

export function CodeFrame({
  source,
  language,
  expandable,
  className,
  children,
}: {
  source: string;
  language: string;
  expandable?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const id = useId();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(source);
      setStatus("Copied");
    } catch {
      setStatus("Copy failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2000);
  }
  return (
    <div
      className={cn("code-block overflow-hidden rounded-xl border", className)}
    >
      <div className="flex h-11 items-center justify-between border-b px-4">
        <span className="text-muted-foreground font-mono text-xs">
          {language === "typescript" ? "tsx" : language}
        </span>
        <Button
          size="sm"
          material="ghost"
          scheme="neutral"
          onClick={copy}
          aria-label="Copy code"
          className="h-7 gap-1.5 px-2 text-xs"
        >
          <i
            aria-hidden="true"
            className={
              status === "Copied"
                ? "icon-[lucide--check]"
                : "icon-[lucide--copy]"
            }
          />
          <span aria-live="polite">{status || "Copy"}</span>
        </Button>
      </div>
      <pre
        id={id}
        tabIndex={0}
        aria-label={language + " code"}
        className={cn(
          "m-0 overflow-auto p-4 text-[13px] leading-6 md:p-5",
          expandable && !expanded && "max-h-72",
        )}
      >
        {children}
      </pre>
      {expandable && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:bg-neutral hover:text-foreground focus-visible:outline-outline w-full border-t px-4 py-2.5 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-[-3px]"
        >
          {expanded ? "Collapse source" : "Expand source"}
        </button>
      )}
    </div>
  );
}
