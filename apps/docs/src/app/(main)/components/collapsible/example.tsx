"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "earthling-ui/collapsible";

type CollapsibleExampleProps = Pick<
  ComponentProps<typeof Collapsible>,
  "disabled"
>;

export default function Example(props: CollapsibleExampleProps) {
  return (
    <Collapsible className="w-full max-w-sm space-y-2" {...props}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-medium">Repository access</h4>
          <p className="text-muted-foreground text-sm">3 connected projects</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button material="ghost" shape="icon" size="sm" type="button">
            <i
              aria-hidden="true"
              className="icon-[lucide--chevrons-up-down] size-4"
            />
            <span className="sr-only">Toggle repository list</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-3 py-2 font-mono text-sm">
        earthling-ui
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-3 py-2 font-mono text-sm">
          earthling-digital
        </div>
        <div className="rounded-md border px-3 py-2 font-mono text-sm">
          design-assets
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
