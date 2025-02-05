"use client";

import { useMemo } from "react";
import { Code } from "@/components/code";
import { useComponentSandbox } from "./context";

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

  const code = useMemo(
    () => replacePropsWithValues(children || "", props),
    [children, props],
  );

  return (
    <Code language="typescript" formatting="typescript">
      {code}
    </Code>
  );
}
