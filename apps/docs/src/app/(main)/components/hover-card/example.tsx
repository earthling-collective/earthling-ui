"use client";

import type { ComponentProps } from "react";
import { Avatar, AvatarFallback } from "earthling-ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "earthling-ui/hover-card";

type HoverCardExampleProps = ComponentProps<typeof HoverCard>;

export default function Example(props: HoverCardExampleProps) {
  return (
    <HoverCard {...props}>
      <HoverCardTrigger asChild>
        <a
          className="text-primary decoration-primary/40 hover:decoration-primary focus-visible:ring-outline font-medium underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
          href="/components/avatar"
        >
          @earthling-ui
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>EU</AvatarFallback>
          </Avatar>
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-semibold">@earthling-ui</p>
            <p className="text-muted-foreground text-sm">
              Accessible React primitives with carefully tuned defaults.
            </p>
            <p className="text-muted-foreground flex items-center gap-1.5 pt-2 text-xs">
              <i aria-hidden="true" className="icon-[lucide--package] size-4" />
              42 components
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
