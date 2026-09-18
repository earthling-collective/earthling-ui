import { controls } from "./component-docs/controls";
import { overlays } from "./component-docs/overlays";
import { content } from "./component-docs/content";
export type { ComponentInfo, ComponentPropInfo } from "./component-types";

export const componentInformation = [...controls, ...overlays, ...content].sort(
  (a, b) => a.name.localeCompare(b.name),
);

export const componentCategories = [
  {
    name: "Inputs",
    description: "Collect input from people with accessible form controls.",
    icon: "icon-[lucide--text-cursor-input]",
    paths: [
      "button",
      "checkbox",
      "color-picker",
      "input",
      "label",
      "radio",
      "select",
      "slider",
      "switch",
      "textarea",
      "toggle-group",
    ],
  },
  {
    name: "Overlays",
    description: "Dialogs, menus, and floating panels layered over the page.",
    icon: "icon-[lucide--layers]",
    paths: [
      "alert-dialog",
      "context-menu",
      "dialog",
      "drawer",
      "dropdown-menu",
      "hover-card",
      "popover",
      "tooltip",
    ],
  },
  {
    name: "Navigation",
    description: "Help people move through your app and find their place.",
    icon: "icon-[lucide--compass]",
    paths: ["breadcrumbs", "menubar", "navigation-menu", "pagination", "tabs"],
  },
  {
    name: "Feedback",
    description: "Communicate state, progress, and outcomes.",
    icon: "icon-[lucide--message-square-dot]",
    paths: ["alert", "progress", "skeleton", "spinner", "toast"],
  },
  {
    name: "Data Display",
    description: "Present content and data clearly.",
    icon: "icon-[lucide--table-properties]",
    paths: [
      "accordion",
      "avatar",
      "badge",
      "chip",
      "collapsible",
      "kbd",
      "table",
    ],
  },
  {
    name: "Layout",
    description: "Structure pages and group related content.",
    icon: "icon-[lucide--layout-panel-left]",
    paths: ["card", "scroll-area", "separator", "surface"],
  },
];
