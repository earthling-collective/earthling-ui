import type { MDXComponents } from "mdx/types";
import { WorkInProgress } from "./components/wip";
import { Code } from "./components/code";
import { cn } from "earthling-ui/utils/cn";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    WIP: WorkInProgress,

    pre: ({ className, ...props }) => {
      return <pre {...props} className={cn("not-prose", className)} />;
    },

    code: (props) => {
      const lanugageClassName = /language-(\w+)/.exec(
        props.className || "",
      )?.[1];

      switch (lanugageClassName) {
        case "css":
          return <Code {...props} language="css" />;
        case "jsx":
          return <Code {...props} language="typescript" />;
        case "bash":
          return <Code {...props} language="bash" />;
        default:
          return <>{props.children}</>;
      }
    },
  };
}
