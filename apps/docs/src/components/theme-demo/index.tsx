"use client";
import { useState, type CSSProperties } from "react";
import { Button } from "earthling-ui/button";
import { Badge } from "earthling-ui/badge";
import { Input } from "earthling-ui/input";
import { Switch } from "earthling-ui/switch";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
export function ThemeDemo() {
  const [radius, setRadius] = useState("999px");
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
        <span className="text-sm font-medium">Control radius</span>
        <ToggleGroup
          type="single"
          aria-label="Control radius"
          value={radius}
          onValueChange={(v) => v && setRadius(v)}
          size="sm"
        >
          <ToggleGroupItem value="0.5rem">Tight</ToggleGroupItem>
          <ToggleGroupItem value="0.875rem">Soft</ToggleGroupItem>
          <ToggleGroupItem value="999px">Round</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div
        className="bg-surface flex flex-wrap items-center gap-4 p-6 sm:p-8"
        style={{ "--radius-control": radius } as CSSProperties}
      >
        <Button>Primary</Button>
        <Button scheme="neutral" material="outline">
          Outline
        </Button>
        <Badge scheme="good">Available</Badge>
        <Switch defaultChecked aria-label="Example notifications" />
        <Input
          aria-label="Example email"
          placeholder="you@example.com"
          className="w-48"
        />
      </div>
      <p className="text-muted-foreground border-t px-4 py-3 text-xs">
        Use the theme control in the site header to compare light and dark.
        Color changes preserve your chosen radius.
      </p>
    </div>
  );
}
