"use client";

import { Stage } from "@/components/stage";
import { componentInformation } from "@/lib/component-info";
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import { Surface } from "earthling-ui/surface";
import { TextArea } from "earthling-ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { notFound } from "next/navigation";
import { useMemo } from "react";

const examples = {
  button: (props: Record<string, any>) => (
    <Button {...props}>
      <i className="icon-[lucide--house]" />
      {props.shape !== "icon" && `Click me`}
    </Button>
  ),
  input: (props) => <Input {...props} placeholder="Type something..." />,
  textarea: (props) => (
    <TextArea
      {...props}
      placeholder="Type something..."
      rows={4}
      className="max-w-md"
    />
  ),
  surface: (props) => (
    <Surface {...props} className="max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
      nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet ullamcorper
      velit nisl in velit.
    </Surface>
  ),
  ["toggle-group"]: (props) => (
    <ToggleGroup {...props} type="single">
      <ToggleGroupItem value="Sytem">
        <i className="icon-[lucide--computer]" />
        <div>System</div>
      </ToggleGroupItem>
      <ToggleGroupItem value="Light">
        <i className="icon-[lucide--sun]" />
        <div>Light</div>
      </ToggleGroupItem>
      <ToggleGroupItem value="Dark">
        <i className="icon-[lucide--moon]" />
        <div>Dark</div>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
} as Record<string, (props: Record<string, any>) => React.ReactNode>;

export default function ({ path }: { path: string }) {
  const info = useMemo(
    () => componentInformation.find((c) => c.path === path),
    [path],
  );

  if (!info) return notFound();

  return (
    <>
      <Stage controls={info?.props || []}>{examples[info.path]}</Stage>
    </>
  );
}
