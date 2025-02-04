"use client";

import highlight from "@/services/highlight";
import { Button } from "earthling-ui/button";
import { Surface } from "earthling-ui/surface";
import { cn } from "earthling-ui/utils/cn";
import { HTMLAttributes, forwardRef, useMemo, useState } from "react";

export interface CodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: string;
  language: string;
}

// const d = glslPlugin;

export const Code = forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
  const { children, language, className, ...rest } = props;

  const highlighted = useMemo(
    () => highlight.highlight(children || "", { language }).value,
    [children, language],
  );

  const [isCopied, setIsCopied] = useState(false);

  return (
    <Surface
      material={"paper"}
      className="group h-auto rounded-xl border bg-[#0d1117] p-8 text-sm text-[white]"
    >
      <code
        ref={ref}
        {...rest}
        className={cn("font-mono whitespace-pre-wrap", className)}
        dangerouslySetInnerHTML={{
          __html: highlighted,
        }}
      />
      <div className="pointer-events-none absolute inset-0 hidden flex-col items-end p-4 group-hover:flex">
        <Button
          className="pointer-events-auto sticky top-[81px]"
          size="sm"
          scheme={isCopied ? "good" : "neutral"}
          shape={"icon"}
          onClick={() => {
            navigator.clipboard.writeText(children || "");
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          }}
        >
          <i
            className={cn(
              isCopied ? "icon-[lucide--check]" : "icon-[lucide--copy]",
            )}
          />
        </Button>
      </div>
    </Surface>
  );
});
