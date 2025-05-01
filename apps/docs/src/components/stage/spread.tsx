"use client";

import { ComponentPropInfo } from "@/lib/component-info";
import { useMemo, ReactNode } from "react";

function recursiveControls(
  controls: ComponentPropInfo[],
  depth = 0,
  props: Record<string, any>,
  examples: Record<string, any>[],
) {
  examples.push(props);

  if (depth === controls.length) return examples;

  switch (controls[depth].type) {
    case "select":
      for (let i = 0; i < controls[depth].options.length; i++) {
        recursiveControls(
          controls,
          depth + 1,
          { ...props, [controls[depth].prop]: controls[depth].options[i] },
          examples,
        );
      }
      break;
    case "boolean":
      recursiveControls(
        controls,
        depth + 1,
        { ...props, [controls[depth].prop]: true },
        examples,
      );
      recursiveControls(
        controls,
        depth + 1,
        { ...props, [controls[depth].prop]: false },
        examples,
      );
      break;
  }
}

export function Spread({
  controls,
  children,
}: {
  controls: ComponentPropInfo[];
  children?: (props: Record<string, any>) => ReactNode;
}) {
  const examples = useMemo(() => {
    const examples: Record<string, any>[] = [];
    recursiveControls(controls, 0, {}, examples);
    return examples;
  }, [controls]);

  return examples.map((p, i) => (
    <div key={i} className="flex flex-col items-center justify-center">
      {children?.(p)}
    </div>
  ));
}
