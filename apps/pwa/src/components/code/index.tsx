"use client";

import highlight from "@/services/highlight";
import { Button } from "earthling-ui/button";
import { Surface } from "earthling-ui/surface";
import { cn } from "earthling-ui/utils/cn";
import { HighlightOptions } from "highlight.js";
import { BuiltInParserName, format, LiteralUnion } from "prettier";
import {
  HTMLAttributes,
  forwardRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import typescript from "prettier/plugins/typescript";
import estree from "prettier/plugins/estree";

export interface CodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: string;
  language: HighlightOptions["language"];
  formatting?: LiteralUnion<BuiltInParserName, string>;
}

export const Code = forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
  const { children, language, className, formatting, ...rest } = props;

  const [formatted, setFormatted] = useState(children || "");
  useEffect(() => {
    if (!formatting) return;
    (async () => {
      let formatted = await format(children || "", {
        parser: formatting,
        plugins: [typescript, estree],
      });
      // remove trailing semicolon from tsx examples
      if (language === "typescript")
        formatted = formatted.replace(/\>\;\s*$/, ">");
      setFormatted(formatted);
    })();
  }, [children, formatting]);

  const highlighted = useMemo(
    () =>
      highlight.highlight((!!formatting ? formatted : children) || "", {
        language,
      }).value,
    [children, language, formatting, formatted],
  );

  const [isCopied, setIsCopied] = useState(false);

  return (
    <Surface
      material={"paper"}
      className={cn(
        "group h-auto rounded-xl border bg-[#0d1117] p-6 text-sm text-[white]",
        className,
      )}
    >
      <code
        ref={ref}
        {...rest}
        className={cn("font-mono whitespace-pre-wrap")}
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
            navigator.clipboard.writeText(
              (!!formatting ? formatted : children) || "",
            );
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
