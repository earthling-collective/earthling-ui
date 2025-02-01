import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import { Surface } from "earthling-ui/surface";
import { TextArea } from "earthling-ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { ReactNode } from "react";

export type ComponentInfo = {
  path: string;
  name: string;
  description: string;
  dependencies: string[];
  props: ComponentPropInfo[];
};

export type ComponentPropInfo = {
  label: string;
  prop: string;
  defaultValue?: string;
  description: string;
} & (
  | {
      type: "select";
      options: string[];
    }
  | { type: "boolean" }
  | { type: "string" }
  | { type: "number" }
);

export const componentInformation: ComponentInfo[] = [
  {
    path: "button",
    name: "Button",
    description: "A button component",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["filled", "outline", "ghost"],
        defaultValue: "filled",
        description: "The variant of the button",
      },
      {
        prop: "aria-pressed",
        label: "Selected",
        type: "boolean",
        description: "The selected state of the button",
      },
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the button",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: ["default", "primary", "secondary", "good", "caution", "bad"],
        defaultValue: "default",
        description: "The color scheme of the button",
      },
      {
        prop: "shape",
        label: "Shape",
        type: "select",
        options: ["pill", "icon"],
        defaultValue: "pill",
        description: "The shape of the button",
      },
    ],
  },
  {
    path: "input",
    name: "Input",
    description: "An input component",
    dependencies: ["class-variance-authority", "@/utils/cn"],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the input",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: ["default", "primary", "secondary", "good", "caution", "bad"],
        defaultValue: "default",
        description: "The color scheme of the input",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Whether the input is disabled",
      },
    ],
  },
  {
    path: "textarea",
    name: "Textarea",
    description: "A textarea component",
    dependencies: ["class-variance-authority", "@/utils/cn"],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the textarea",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: ["default", "primary", "secondary", "good", "caution", "bad"],
        defaultValue: "default",
        description: "The color scheme of the input",
      },
    ],
  },
  {
    path: "surface",
    name: "Surface",
    description: "A surface component",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "select",
        options: ["paper", "glass"],
        defaultValue: "glass",
        description: "The material of the surface",
      },
      {
        prop: "interactive",
        label: "Interactive",
        type: "boolean",
        description: "Whether the surface is interactive",
      },
    ],
  },

  {
    path: "toggle-group",
    name: "ToggleGroup",
    description: "A toggle group component",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-toggle-group",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the toggle group",
      },
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "outline"],
        defaultValue: "default",
        description: "The variant of the toggle group",
      },
    ],
  },
];
