import { allSchemes, type ComponentInfo } from "../component-types";

export const content: ComponentInfo[] = [
  {
    path: "accordion",
    name: "Accordion",
    description:
      "Organizes related details into expandable sections without leaving the page.",
    notes: [
      "Use concise trigger labels that describe the content revealed below them.",
      "Single expansion is the default; enable multiple sections only when comparing answers is useful.",
      "React Aria provides keyboard navigation and expanded-state semantics through the trigger buttons.",
    ],
    props: [
      {
        prop: "allowsMultipleExpanded",
        label: "Multiple sections",
        type: "boolean",
        defaultValue: false,
        description: "Allows more than one item to remain expanded.",
      },
      {
        prop: "isDisabled",
        label: "Disabled",
        type: "boolean",
        defaultValue: false,
        description: "Disables every disclosure in the group.",
      },
    ],
  },
  {
    path: "alert",
    name: "Alert",
    description:
      "Calls attention to an important status, outcome, or next step.",
    notes: [
      "Alerts use role=alert, so reserve them for information that should be announced immediately.",
      "Pair a short title with a specific description; color alone should never carry the meaning.",
      "Choose a semantic scheme such as good, caution, or bad when the message represents an outcome.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Sets the alert's semantic color treatment.",
      },
    ],
  },
  {
    path: "avatar",
    name: "Avatar",
    description:
      "Represents a person or organization with an image and resilient fallback.",
    notes: [
      "Describe the person in the image alt text; use an empty alt only when nearby text already identifies them.",
      "Always provide AvatarFallback so slow or failed images retain a recognizable label.",
      "The inset image outline preserves the circular edge against both light and dark surfaces.",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg", "xl"],
        defaultValue: "md",
        description: "Sets the avatar's diameter.",
      },
    ],
  },
  {
    path: "badge",
    name: "Badge",
    description:
      "Displays compact status or classification metadata beside other content.",
    notes: [
      "Keep badge text brief and descriptive; badges should support nearby content rather than replace it.",
      "Use paper for stronger status emphasis and outline for quieter metadata.",
      "Badge is a span by default; use asChild when another inline semantic element is required.",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "outline"],
        defaultValue: "paper",
        description: "Sets a filled or outlined treatment.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Sets the badge color pair.",
      },
    ],
  },
  {
    path: "breadcrumbs",
    name: "Breadcrumbs",
    description:
      "Shows the current page's position within a navigable hierarchy.",
    notes: [
      "Wrap each ancestor in a real link and leave the current page as the final item.",
      "Use current on the final Breadcrumb when you need to set aria-current explicitly.",
      "Breadcrumbs complement primary navigation and should not reproduce a long browsing history.",
    ],
    props: [
      {
        prop: "isDisabled",
        label: "Disabled",
        type: "boolean",
        defaultValue: false,
        description: "Disables actions for the breadcrumb collection.",
      },
    ],
  },
  {
    path: "card",
    name: "Card",
    description:
      "Groups a focused piece of content with optional header, body, and actions.",
    notes: [
      "Use paper for an opaque content surface and glass when underlying color should remain visible.",
      "Keep the heading level appropriate to the surrounding page; CardTitle renders an h3 by default.",
      "Place related actions in CardFooter and keep the whole card non-interactive when it contains buttons or links.",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "glass"],
        defaultValue: "paper",
        description: "Sets an opaque paper or translucent glass surface.",
      },
    ],
  },
  {
    path: "chip",
    name: "Chip",
    description: "Presents a compact category, attribute, or filter value.",
    notes: [
      "Use short nouns or noun phrases so chips remain easy to scan.",
      "Chip renders a div by default; use asChild with an appropriate interactive element for clickable filters.",
      "Choose a scheme that maintains readable foreground contrast at the small text size.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Sets the chip color pair.",
      },
    ],
  },
  {
    path: "collapsible",
    name: "Collapsible",
    description:
      "Lets people reveal or hide a single region of supporting content.",
    notes: [
      "Use CollapsibleTrigger for the control so expanded state and keyboard behavior stay synchronized.",
      "Give icon-only triggers an accessible label that names the content they toggle.",
      "Prefer Accordion when several sibling sections need coordinated expansion behavior.",
    ],
    props: [
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        defaultValue: false,
        description: "Prevents the disclosure from being toggled.",
      },
    ],
  },
  {
    path: "kbd",
    name: "Kbd",
    description:
      "Formats a keyboard key or shortcut inside instructions and menus.",
    notes: [
      "Write keys in the same order people press them and keep separators outside Kbd.",
      "Provide a readable phrase around the shortcut; the visual keycaps are supporting notation.",
      "Use tabular or changing-value styles elsewhere—Kbd is intended for literal key labels.",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the keycap height and text size.",
      },
    ],
  },
  {
    path: "pagination",
    name: "Pagination",
    description:
      "Provides direct navigation through a sequence of result pages.",
    notes: [
      "Use real href values so pagination works with standard browser navigation and link actions.",
      "Mark exactly one PaginationLink active to expose aria-current=page.",
      "The currentPage control sets the demo's active page; its links update local state while retaining real fallback URLs.",
    ],
    props: [
      {
        prop: "currentPage",
        label: "Current page",
        type: "number",
        defaultValue: 2,
        description: "Sets the active demo page, clamped from 1 to 3.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Sets the link highlight color.",
      },
    ],
  },
  {
    path: "progress",
    name: "Progress",
    description:
      "Communicates determinate completion or an indeterminate operation in progress.",
    notes: [
      "Provide an accessible label that names the operation rather than repeating a percentage.",
      "Set value to null for indeterminate work; finite values are clamped between zero and max.",
      "Pair long-running progress with nearby text so completion remains understandable without color.",
    ],
    props: [
      {
        prop: "value",
        label: "Value",
        type: "number",
        defaultValue: 64,
        description: "Sets completed work before clamping to the valid range.",
      },
      {
        prop: "max",
        label: "Maximum",
        type: "number",
        defaultValue: 100,
        description: "Sets the positive total used to calculate completion.",
      },
      {
        prop: "indeterminate",
        label: "Indeterminate",
        type: "boolean",
        defaultValue: false,
        description:
          "Makes this example pass a null value when completion is unknown.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Sets the indicator color.",
      },
    ],
  },
  {
    path: "scroll-area",
    name: "Scroll Area",
    description:
      "Provides a styled viewport while preserving native scrolling behavior.",
    notes: [
      "Give the viewport a constrained height or width; unconstrained content has no reason to scroll.",
      "Keep important actions outside long scroll regions when possible.",
      "The height control belongs to this example and is clamped between 160 and 320 pixels.",
    ],
    props: [
      {
        prop: "height",
        label: "Viewport height",
        type: "number",
        defaultValue: 240,
        description: "Sets this example's viewport height in pixels.",
      },
    ],
  },
  {
    path: "separator",
    name: "Separator",
    description:
      "Creates a visual or semantic boundary between adjacent groups of content.",
    notes: [
      "Keep decorative true when the surrounding structure already communicates the grouping.",
      "Set decorative to false only when the separator conveys structure, and give it an accessible label when useful.",
      "Vertical separators need a parent with an explicit height.",
    ],
    props: [
      {
        prop: "orientation",
        label: "Orientation",
        type: "toggle-group",
        options: ["horizontal", "vertical"],
        defaultValue: "horizontal",
        description: "Sets the divider axis.",
      },
      {
        prop: "decorative",
        label: "Decorative",
        type: "boolean",
        defaultValue: true,
        description: "Removes separator semantics when it is purely visual.",
      },
    ],
  },
  {
    path: "skeleton",
    name: "Skeleton",
    description: "Reserves the shape of content while its data is loading.",
    notes: [
      "Match the approximate size and layout of the content that will replace each skeleton.",
      "Group related placeholders under one loading status instead of announcing every shape.",
      "The pulse animation stops when reduced motion is requested.",
    ],
    props: [],
  },
  {
    path: "spinner",
    name: "Spinner",
    description: "Indicates short activity when completion cannot be measured.",
    notes: [
      "Give each spinner a label that names the operation, especially when no visible text accompanies it.",
      "Use Progress when completion can be measured or the wait is expected to be long.",
      "Rotation stops under reduced motion while the status label remains available.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Sets the spinner color.",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the spinner dimensions.",
      },
    ],
  },
  {
    path: "surface",
    name: "Surface",
    description:
      "Groups related content on an opaque paper or translucent glass layer.",
    notes: [
      "Use paper for dependable contrast and glass only where the background supports translucency.",
      "When interactive is true, render Surface as a semantic button or link with asChild.",
      "Avoid nesting equal corner radii; reduce the inner radius by the surrounding inset.",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "glass"],
        defaultValue: "glass",
        description: "Sets an opaque paper or translucent glass surface.",
      },
      {
        prop: "interactive",
        label: "Interactive",
        type: "boolean",
        defaultValue: false,
        description:
          "Makes this example render the surface as a focusable button.",
      },
    ],
  },
  {
    path: "table",
    name: "Table",
    description:
      "Presents related records in a responsive, scan-friendly grid.",
    notes: [
      "Use TableHead for column labels and TableCaption to give the dataset a concise name.",
      "Set numeric on both the header and cells of numeric columns for right alignment and tabular figures.",
      "Keep cell content concise; move dense detail into a dedicated view when horizontal scanning becomes difficult.",
    ],
    props: [],
  },
];
