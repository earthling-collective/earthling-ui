import type { MDXComponents } from "mdx/types";
import { WorkInProgress } from "./components/wip";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    WIP: WorkInProgress,
  };
}
