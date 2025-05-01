export type ComponentInfo = {
  path: string;
  name: string;
  description: string;
  dependencies: string[];
  exports: string[];
  props: ComponentPropInfo[];
};

const allSchemes = [
  "primary",
  "secondary",
  "tertiary",
  "neutral",
  "muted",
  "good",
  "caution",
  "bad",
];

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

export const componentInformation: ComponentInfo[] = [
  {
    path: "accordion",
    name: "Accordion",
    description: "An accordion component",
    dependencies: [
      "react",
      "class-variance-authority",
      "react-aria-components",
      "@/utils/cn",
    ],
    exports: [
      "Accordion",
      "AccordionItem",
      "AccordionTrigger",
      "AccordionContent",
    ],
    props: [],
  },
  {
    path: "chip",
    name: "Chip",
    description: "A chip component",
    dependencies: ["react", "class-variance-authority", "@/utils/cn"],
    exports: ["Chip"],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper"],
        defaultValue: "paper",
        description: "The material of the Chip",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the chip",
      },
    ],
  },
  {
    path: "breadcrumbs",
    name: "Breadcrumbs",
    description: "A breadcrumbs component",
    dependencies: [
      "react",
      "class-variance-authority",
      "react-aria-components",
      "@/utils/cn",
    ],
    exports: ["Breadcrumbs", "Breadcrumb"],
    props: [],
  },
  {
    path: "button",
    name: "Button",
    description: "A button component",
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    exports: ["Button"],
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
    dependencies: ["react", "class-variance-authority", "@/utils/cn", "vaul"],
    exports: ["Drawer", "DrawerTrigger", "DrawerContent"],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: true,
        description: "Whether the drawer is modal",
      },
      {
        prop: "position",
        label: "Position",
        type: "toggle-group",
        options: ["left", "right", "top", "bottom"],
        defaultValue: "bottom",
        description: "The position of the drawer",
      },
    ],
  },
  {
    path: "input",
    name: "Input",
    description: "An input component",
    dependencies: ["react", "class-variance-authority", "@/utils/cn"],
    exports: ["Input"],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "outline"],
        defaultValue: "outline",
        description: "The material of the input",
      },
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
    dependencies: ["react", "class-variance-authority", "@/utils/cn"],
    exports: ["Textarea"],
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
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-popover",
      "@/utils/cn",
    ],
    exports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverArrow"],
    props: [],
  },
  {
    path: "separator",
    name: "Separator",
    description: "A separator component",
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-separator",
      "@/utils/cn",
    ],
    exports: ["Separator"],
    props: [],
  },
  {
    path: "select",
    name: "Select",
    description: "A select component",
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-select",
      "@/utils/cn",
    ],
    exports: [
      "Select",
      "SelectTrigger",
      "SelectValue",
      "SelectContent",
      "SelectItem",
    ],
    props: [],
  },
  {
    path: "surface",
    name: "Surface",
    description: "A surface component",
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-slot",
      "@/utils/cn",
    ],
    exports: ["Surface"],
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
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-switch",
      "@/utils/cn",
    ],
    exports: ["Switch"],
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
    path: "tabs",
    name: "Tabs",
    description: "A tabs component",
    dependencies: [
      "react",
      "class-variance-authority",
      "react-aria-components",
      "@/utils/cn",
    ],
    exports: ["Tabs", "TabList", "TabPanel", "Tab"],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "The color scheme of the tabs",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "The size of the tabs",
      },
    ],
  },
  {
    path: "toggle-group",
    name: "ToggleGroup",
    description: "A toggle group component",
    dependencies: [
      "react",
      "class-variance-authority",
      "@radix-ui/react-toggle-group",
      "@/utils/cn",
    ],
    exports: ["ToggleGroup", "ToggleGroupItem"],
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
