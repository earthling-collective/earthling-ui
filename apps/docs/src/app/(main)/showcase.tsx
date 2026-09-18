"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "earthling-ui/button";
import { Badge } from "earthling-ui/badge";
import { Input } from "earthling-ui/input";
import { Switch } from "earthling-ui/switch";
import { Slider } from "earthling-ui/slider";
import { Progress } from "earthling-ui/progress";
import { Label } from "earthling-ui/label";

export function Showcase() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [budget, setBudget] = useState([65]);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className="preview-canvas rounded-2xl border p-5 sm:p-7">
      <div className="text-muted-foreground mb-6 flex items-center justify-between gap-3 text-xs">
        <span>Built with Earthling UI</span>
        <span className="flex items-center gap-2">
          <span className="bg-good size-1.5 rounded-full" />
          Live components
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.1fr_1fr]">
        <form
          className="bg-background rounded-xl border p-5 shadow-xs sm:p-6"
          onChange={() => setSaved(false)}
          onSubmit={(event) => {
            event.preventDefault();
            setSaving(true);
            setSaved(false);
            timer.current = setTimeout(() => {
              setSaving(false);
              setSaved(true);
            }, 700);
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Make yourself at home</h2>
              <p className="text-muted-foreground mt-1 text-xs">
                A little space for your next idea.
              </p>
            </div>
            <i
              aria-hidden="true"
              className="text-muted-foreground icon-[lucide--orbit] size-5"
            />
          </div>
          <Label htmlFor="workspace-name" className="mb-2 block text-xs">
            Workspace name
          </Label>
          <Input id="workspace-name" defaultValue="Earthling Studio" required />
          <div className="my-6 flex items-center justify-between gap-4">
            <div>
              <Label htmlFor="weekly-digest" className="text-sm">
                Weekly digest
              </Label>
              <p className="text-muted-foreground mt-1 text-xs">
                The useful updates, in one place.
              </p>
            </div>
            <Switch
              id="weekly-digest"
              defaultChecked
              onCheckedChange={() => setSaved(false)}
            />
          </div>
          <div className="flex items-center justify-between gap-3 border-t pt-4">
            <span role="status" className="text-muted-foreground text-xs">
              {saved
                ? "Preferences saved for this preview."
                : "Try changing a few things."}
            </span>
            <Button type="submit" loading={saving} size="sm">
              Save changes
            </Button>
          </div>
        </form>
        <div className="grid gap-5">
          <div className="bg-background rounded-xl border p-5 shadow-xs sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-sm font-medium">Room to grow</h2>
              <Badge scheme="good">On track</Badge>
            </div>
            <div className="mb-4 flex items-end justify-between">
              <span className="text-4xl font-medium tracking-tight tabular-nums">
                {budget[0]}
                <span className="text-muted-foreground text-lg">%</span>
              </span>
              <span className="text-muted-foreground text-xs">
                Monthly capacity
              </span>
            </div>
            <Slider
              value={budget}
              onValueChange={setBudget}
              thumbLabels={["Monthly capacity"]}
            />
          </div>
          <div className="bg-background rounded-xl border p-5 shadow-xs sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i
                  aria-hidden="true"
                  className="icon-[lucide--layers] size-4"
                />
                <h2 className="text-sm font-medium">Everything in its place</h2>
              </div>
              <span className="text-muted-foreground text-xs tabular-nums">
                8 / 12
              </span>
            </div>
            <Progress value={8} max={12} aria-label="Project setup" />
            <p className="text-muted-foreground mt-3 text-xs">
              A shared language, down to the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
