import type { MDXComponents } from "mdx/types";
import { WorkInProgress } from "./components/wip";
import { Code } from "./components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    WIP: WorkInProgress,
  };
}
