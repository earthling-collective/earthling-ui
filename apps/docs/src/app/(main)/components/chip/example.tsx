"use client";

import type { ComponentProps } from "react";
import { Chip } from "earthling-ui/chip";

type ChipExampleProps = ComponentProps<typeof Chip>;

export default function Example(props: ChipExampleProps) {
  return <Chip {...props}>Design system</Chip>;
}
