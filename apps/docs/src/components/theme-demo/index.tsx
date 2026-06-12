"use client";

import { useState } from "react";
import { cn } from "earthling-ui/utils/cn";
import { Button } from "earthling-ui/button";
import { Badge } from "earthling-ui/badge";
import { Input } from "earthling-ui/input";
import { Switch } from "earthling-ui/switch";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";

export function ThemeDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-sm font-medium">Live preview</span>
        <ToggleGroup
          type="single"
          value={theme}
          onValueChange={(v) => v && setTheme(v as "light" | "dark")}
          size="sm"
        >
          <ToggleGroupItem value="light" aria-label="Light theme">
            <i className="size-4 icon-[lucide--sun]" />
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" aria-label="Dark theme">
            <i className="size-4 icon-[lucide--moon]" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div
        className={cn(
          "flex flex-wrap items-center gap-4 bg-background p-8 transition-colors",
          theme === "dark" && "theme-dark",
        )}
      >
        <Button scheme="primary">Primary</Button>
        <Button scheme="secondary" material="outline">
          Secondary
        </Button>
        <Badge scheme="good">Badge</Badge>
        <Switch scheme="primary" defaultChecked aria-label="Example switch" />
        <Input placeholder="Type something…" className="w-44" />
      </div>
    </div>
  );
}
