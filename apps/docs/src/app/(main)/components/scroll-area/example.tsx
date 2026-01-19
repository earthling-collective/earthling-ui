"use client";

import { ScrollArea } from "earthling-ui/scroll-area";
import { Separator } from "earthling-ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Item ${a.length - i}`
);

export default function (props: Record<string, any>) {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border" {...props}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
