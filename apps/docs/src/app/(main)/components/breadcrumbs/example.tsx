"use client";

import type { ComponentProps } from "react";
import { Breadcrumb, Breadcrumbs } from "earthling-ui/breadcrumbs";

type BreadcrumbsExampleProps = Pick<
  ComponentProps<typeof Breadcrumbs>,
  "isDisabled"
>;

export default function Example(props: BreadcrumbsExampleProps) {
  return (
    <Breadcrumbs {...props} aria-label="Documentation breadcrumb">
      <Breadcrumb>
        <a href="/">Docs</a>
      </Breadcrumb>
      <Breadcrumb>
        <a href="/#components">Components</a>
      </Breadcrumb>
      <Breadcrumb current>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
