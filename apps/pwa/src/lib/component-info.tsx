export type ComponentInfo = {
  path: string;
  name: string;
  status: "future" | "wip" | "ready";
  description: string;
  dependencies: string[];
  props: ComponentPropInfo[];
};

const allSchemes = [
  "primary",
  "secondary",
  "tertiary",
  "muted",
  "good",
  "caution",
  "bad",
];

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
  | {
      type: "toggle-group";
      options: string[];
    }
  | { type: "boolean" }
  | { type: "string" }
  | { type: "number" }
);

export const componentInformation: ComponentInfo[] = [
  {
    path: "accordion",
    name: "Accordion",
    description: "An accordion component",
    status: "future",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-accordion",
      "@/utils/cn",
    ],
    props: [],
  },
  {
    path: "badge",
    name: "Badge",
    description: "A badge component",
    status: "future",
    dependencies: ["class-variance-authority", "@/utils/cn"],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper"],
        defaultValue: "paper",
        description: "The material of the badge",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the button",
      },
    ],
  },
  {
    path: "button",
    name: "Button",
    description: "A button component",
    status: "wip",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "outline", "ghost"],
        defaultValue: "paper",
        description: "The material of the button",
      },
      {
        prop: "aria-pressed",
        label: "Selected",
        type: "boolean",
        description: "The toggle-grouped state of the button",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Whether the button is disabled",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the button",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the button",
      },
      {
        prop: "shape",
        label: "Shape",
        type: "toggle-group",
        options: ["pill", "icon"],
        defaultValue: "pill",
        description: "The shape of the button",
      },
    ],
  },
  {
    path: "drawer",
    name: "Drawer",
    description: "A drawer component",
    status: "future",
    dependencies: ["class-variance-authority", "@/utils/cn", "vaul"],
    props: [],
  },
  {
    path: "input",
    name: "Input",
    description: "An input component",
    dependencies: ["class-variance-authority", "@/utils/cn"],
    status: "wip",
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the input",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
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
    status: "wip",
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the textarea",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the input",
      },
    ],
  },
  {
    path: "popover",
    name: "Popover",
    description: "A popover component",
    status: "future",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-popover",
      "@/utils/cn",
    ],
    props: [],
  },
  {
    path: "select",
    name: "Select",
    description: "A select component",
    status: "wip",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-select",
      "@/utils/cn",
    ],
    props: [],
  },
  {
    path: "surface",
    name: "Surface",
    description: "A surface component",
    status: "wip",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
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
    path: "switch",
    name: "Switch",
    description: "A switch component",
    status: "wip",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-switch",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper"],
        defaultValue: "paper",
        description: "The material of the switch",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the switch",
      },
    ],
  },
  {
    path: "toggle-group",
    name: "ToggleGroup",
    description: "A toggle group component",
    status: "wip",
    dependencies: [
      "class-variance-authority",
      "@radix-ui/react-toggle-group",
      "@/utils/cn",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper"],
        defaultValue: "paper",
        description: "The material of the toggle group",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the toggle group",
      },
    ],
  },
];
