export type ComponentInfo = {
  path: string;
  name: string;
  description: string;
  notes?: string[];
  props: ComponentPropInfo[];
};

export type ComponentPropInfo = {
  label: string;
  prop: string;
  description: string;
} & (
  | {
      type: "select";
      defaultValue?: string;
      options: string[];
    }
  | {
      type: "toggle-group";
      defaultValue?: string;
      options: string[];
    }
  | { type: "boolean"; defaultValue?: boolean }
  | { type: "string"; defaultValue?: string }
  | { type: "number"; defaultValue?: number }
);

export const allSchemes = [
  "default",
  "primary",
  "secondary",
  "tertiary",
  "neutral",
  "muted",
  "good",
  "caution",
  "bad",
];
