"use client";

import { ScrollArea } from "earthling-ui/scroll-area";
import { Separator } from "earthling-ui/separator";

interface ScrollAreaExampleProps {
  height?: number;
}

const updates = [
  ["Typography", "Adjusted display scale"],
  ["Buttons", "Added loading behavior"],
  ["Dialogs", "Improved focus return"],
  ["Tables", "Aligned numeric columns"],
  ["Motion", "Added reduced-motion fallbacks"],
  ["Themes", "Refined dark surfaces"],
];

export default function Example({ height = 240 }: ScrollAreaExampleProps) {
  const safeHeight = Number.isFinite(height)
    ? Math.min(320, Math.max(160, height))
    : 240;

  return (
    <ScrollArea
      className="bg-surface w-full max-w-sm rounded-lg border"
      style={{ height: safeHeight }}
    >
      <div className="p-4">
        <h4 className="text-sm font-medium">Release notes</h4>
        <p className="text-muted-foreground mt-1 text-sm">September 2026</p>
        <ul className="mt-4">
          {updates.map(([title, detail], index) => (
            <li key={title}>
              {index > 0 && <Separator className="my-3" />}
              <p className="text-sm font-medium">{title}</p>
              <p className="text-muted-foreground text-sm">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
}
