"use client";

import { useMemo, useEffect, useState } from "react";
import { Code } from "@/components/code";
import { useComponentSandbox } from "./context";
import { format } from "prettier";
import typescript from "prettier/plugins/typescript";
import estree from "prettier/plugins/estree";

function replacePropsWithValues(
  jsx: string,
  propsObject: Record<string, any>,
): string {
  let result = jsx.replace(
    /\{\.\.\.props\}/g,
    Object.entries(propsObject)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}="${value}"`;
        } else if (typeof value === "number" || typeof value === "boolean") {
          return `${key}={${value}}`;
        } else if (typeof value === "object") {
          return `${key}={${JSON.stringify(value)}}`;
        }
        return "";
      })
      .join(" "),
  );
  return result;
}

export function ComponentSandboxCode({ children }: { children?: string }) {
  const [props] = useComponentSandbox();

  const [code, setCode] = useState("");

  useEffect(() => {
    (async () => {
      if (!children) return;
      setCode(
        (
          await format(replacePropsWithValues(children, props), {
            parser: "typescript",
            plugins: [typescript, estree],
          })
        ).replace(/\;\s*$/, ""),
      );
    })();
  }, [props, children]);

  return <Code language="typescript">{code}</Code>;
}
