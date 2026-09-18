import { allSchemes, type ComponentInfo } from "../component-types";

export const overlays: ComponentInfo[] = [
  {
    path: "dialog",
    name: "Dialog",
    description:
      "A modal or non-modal surface for focused tasks that need supporting context.",
    notes: [
      "Give every dialog a visible title and description so assistive technology can announce its purpose.",
      "Keep the primary action in the footer and return focus to the trigger when the dialog closes.",
      "Use non-modal dialogs sparingly because background content remains interactive.",
    ],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: true,
        description:
          "Traps focus and makes background content inert while open.",
      },
    ],
  },
  {
    path: "drawer",
    name: "Drawer",
    description:
      "A draggable edge panel for supporting tasks, filters, and compact workflows.",
    notes: [
      "Drawer position is shared with DrawerContent, so one position prop keeps gestures and layout aligned.",
      "Include DrawerTitle and DrawerDescription even when their text is visually hidden.",
      "Use a dialog for short confirmations; drawers work best for progressive or mobile-friendly tasks.",
    ],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: true,
        description: "Makes content outside the drawer unavailable while open.",
      },
      {
        prop: "position",
        label: "Position",
        type: "toggle-group",
        options: ["left", "right", "top", "bottom"],
        defaultValue: "bottom",
        description: "Sets the edge used for placement and drag gestures.",
      },
    ],
  },
  {
    path: "popover",
    name: "Popover",
    description:
      "A compact anchored surface for controls or information that needs interaction.",
    notes: [
      "Use a tooltip for a short label; use a popover when the floating content contains controls.",
      "Keep keyboard focus order logical and provide visible labels for form fields.",
      "Collision handling may flip the requested side when viewport space is limited.",
    ],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: false,
        description: "Whether interaction outside the popover is blocked.",
      },
      {
        prop: "side",
        label: "Side",
        type: "select",
        options: ["top", "right", "bottom", "left"],
        defaultValue: "bottom",
        description: "Preferred side of the trigger before collision handling.",
      },
      {
        prop: "align",
        label: "Align",
        type: "toggle-group",
        options: ["start", "center", "end"],
        defaultValue: "center",
        description: "Aligns the content along the selected side.",
      },
      {
        prop: "sideOffset",
        label: "Side offset",
        type: "number",
        defaultValue: 4,
        description: "Distance in pixels between the trigger and content.",
      },
    ],
  },
  {
    path: "alert-dialog",
    name: "Alert Dialog",
    description:
      "An interruptive confirmation dialog for actions with meaningful consequences.",
    notes: [
      "State the consequence in the title and description instead of using a generic question.",
      "Name actions for their outcome, such as “Revoke key,” and keep a clear cancel option.",
      "Reserve alert dialogs for decisions that should block interaction until answered.",
    ],
    props: [],
  },
  {
    path: "context-menu",
    name: "Context Menu",
    description:
      "A contextual action menu opened from a pointer or the keyboard.",
    notes: [
      "Ensure the trigger can receive focus so keyboard users can open it with Shift+F10.",
      "Keep commands specific to the selected object and group related actions with separators.",
      "Shortcuts shown in the menu are hints; register the actual keyboard commands separately.",
    ],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: true,
        description: "Blocks interaction outside the menu while it is open.",
      },
    ],
  },
  {
    path: "hover-card",
    name: "Hover Card",
    description:
      "A non-essential preview for linked content, available by pointer hover or keyboard focus.",
    notes: [
      "The trigger should remain a real link so the destination works without the preview.",
      "Do not place required actions or information exclusively inside a hover card.",
      "Open and close delays prevent the preview from flickering while the pointer travels.",
    ],
    props: [
      {
        prop: "openDelay",
        label: "Open delay",
        type: "number",
        defaultValue: 700,
        description: "Milliseconds to wait before opening the preview.",
      },
      {
        prop: "closeDelay",
        label: "Close delay",
        type: "number",
        defaultValue: 300,
        description: "Milliseconds to wait before closing the preview.",
      },
    ],
  },
  {
    path: "toast",
    name: "Toast",
    description:
      "A brief status message that appears without interrupting the current task.",
    notes: [
      "Keep messages concise and use ToastAction only for a relevant recovery action such as Undo.",
      "ToastAction requires altText so assistive technology can describe the action in context.",
      "Do not rely on a toast for errors or decisions that require acknowledgment.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Sets the semantic color treatment of the toast.",
      },
      {
        prop: "duration",
        label: "Duration",
        type: "number",
        defaultValue: 5000,
        description: "Milliseconds the toast remains open before dismissing.",
      },
    ],
  },
  {
    path: "tooltip",
    name: "Tooltip",
    description:
      "A delayed, non-interactive label or hint for a focused or hovered control.",
    notes: [
      "Give icon-only controls an accessible name; the tooltip is supplementary.",
      "The provider waits 500ms for the first tooltip and uses a 300ms skip window for nearby tooltips.",
      "Keep tooltip content short and avoid interactive elements inside it.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Sets the tooltip foreground and background colors.",
      },
      {
        prop: "side",
        label: "Side",
        type: "select",
        options: ["top", "right", "bottom", "left"],
        defaultValue: "top",
        description: "Preferred side of the trigger before collision handling.",
      },
      {
        prop: "delayDuration",
        label: "Open delay",
        type: "number",
        defaultValue: 500,
        description: "Milliseconds to wait before opening the first tooltip.",
      },
    ],
  },
  {
    path: "dropdown-menu",
    name: "Dropdown Menu",
    description:
      "A button-triggered menu of commands, choices, and nested actions.",
    notes: [
      "Use a button as the trigger and let the menu manage arrow-key navigation and focus.",
      "Use checkbox or radio items for persistent choices and regular items for immediate commands.",
      "Keep destructive actions visually distinct and separated from routine commands.",
    ],
    props: [
      {
        prop: "modal",
        label: "Modal",
        type: "boolean",
        defaultValue: true,
        description: "Blocks interaction outside the menu while it is open.",
      },
    ],
  },
  {
    path: "menubar",
    name: "Menubar",
    description:
      "A persistent application menu that groups commands into keyboard-navigable menus.",
    notes: [
      "Use menubars for app-like command sets, not as the primary navigation for a website.",
      "Group related commands and mirror familiar platform ordering when users expect it.",
      "Radio and checkbox items communicate persistent settings better than regular menu items.",
    ],
    props: [],
  },
  {
    path: "navigation-menu",
    name: "Navigation Menu",
    description:
      "A responsive collection of links and optional disclosure panels for site navigation.",
    notes: [
      "Every destination should use a real link with meaningful text and a valid URL.",
      "Keep hover highlights instant because users scan navigation frequently.",
      "Disable the shared viewport when each panel needs independent positioning.",
    ],
    props: [
      {
        prop: "viewport",
        label: "Shared viewport",
        type: "boolean",
        defaultValue: true,
        description: "Renders panels inside the animated shared viewport.",
      },
    ],
  },
];
