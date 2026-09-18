"use client";

import type { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "earthling-ui/avatar";

type AvatarExampleProps = Pick<ComponentProps<typeof Avatar>, "size">;

export default function Example(props: AvatarExampleProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar {...props}>
        <AvatarImage
          src="https://github.com/sfrady20.png"
          alt="Portrait of Steven Frady"
        />
        <AvatarFallback>SF</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">Steven Frady</p>
        <p className="text-muted-foreground truncate text-sm">
          Product designer
        </p>
      </div>
    </div>
  );
}
