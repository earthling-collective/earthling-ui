import type { MDXComponents } from "mdx/types";
import { WorkInProgress } from "./components/wip";
import { Code } from "./components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    WIP: WorkInProgress,

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
