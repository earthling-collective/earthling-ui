"use client";

import type { ComponentProps } from "react";
import { Badge } from "earthling-ui/badge";

type BadgeExampleProps = ComponentProps<typeof Badge>;

export default function Example(props: BadgeExampleProps) {
  return <Badge {...props}>Operational</Badge>;
}
