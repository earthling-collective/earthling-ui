"use client";

import highlight from "@/services/highlight";
import { Button } from "earthling-ui/button";
import { Surface } from "earthling-ui/surface";
import { cn } from "earthling-ui/utils/cn";
import { HTMLAttributes, forwardRef, useMemo } from "react";

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

  return (
    <Surface
      material={"paper"}
      className="group relative bg-[#0d1117] p-8 text-sm text-[white]"
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
          className="pointer-events-auto sticky top-[80px]"
          size="sm"
          scheme={"secondary"}
          shape={"icon"}
        >
          <i className="icon-[lucide--copy]" />
        </Button>
      </div>
    </Surface>
  );
});
