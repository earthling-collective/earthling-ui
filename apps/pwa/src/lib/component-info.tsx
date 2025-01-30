import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import { Surface } from "earthling-ui/surface";
import { TextArea } from "earthling-ui/textarea";
import { ReactNode } from "react";

export type ComponentInfo = {
  path: string;
  name: string;
  description: string;
  dependencies: string[];
  example: (props: Record<string, any>) => ReactNode;
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
    example: (props) => (
      <Button {...props}>
        <i className="icon-[lucide--house]" />
        {props.shape !== "icon" && `Click me`}
      </Button>
    ),
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
    example: (props) => <Input {...props} placeholder="Type something..." />,
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
    example: (props) => (
      <TextArea
        {...props}
        placeholder="Type something..."
        rows={4}
        className="max-w-md"
      />
    ),
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
        prop: "interactive",
        label: "Interactive",
        type: "boolean",
        description: "Whether the surface is interactive",
      },
    ],
    example: (props) => (
      <Surface {...props} className="max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
        nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
        ullamcorper velit nisl in velit.
      </Surface>
    ),
  },
];
