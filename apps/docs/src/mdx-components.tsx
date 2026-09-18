import type { MDXComponents } from "mdx/types";
import { Children, isValidElement, type ReactElement } from "react";
import { Code } from "./components/code";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => {
      const child = Children.only(children) as ReactElement<{
        className?: string;
        children?: string;
      }>;
      if (!isValidElement(child)) return <pre>{children}</pre>;
      const language =
        /language-([\w-]+)/.exec(child.props.className ?? "")?.[1] ??
        "plaintext";
      const aliases: Record<string, string> = {
        ts: "typescript",
        tsx: "typescript",
        jsx: "typescript",
        js: "typescript",
        sh: "bash",
      };
      return (
        <div className="not-prose my-6">
          <Code language={aliases[language] ?? language}>
            {String(child.props.children ?? "")}
          </Code>
        </div>
      );
    },
    ...components,
  };
}
