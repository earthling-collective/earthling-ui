import { allSchemes, type ComponentInfo } from "../component-types";

export const controls: ComponentInfo[] = [
  {
    path: "button",
    name: "Button",
    description:
      "Triggers an action with visual variants for emphasis and context.",
    notes: [
      "Use a short verb phrase that describes the action.",
      "The loading state keeps the label width stable, sets aria-busy, and disables the native button.",
      "Icon-only buttons still need an accessible name through aria-label.",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "outline", "ghost"],
        defaultValue: "paper",
        description: "Sets the button's visual emphasis.",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the control height and horizontal padding.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Applies a semantic color scheme.",
      },
      {
        prop: "shape",
        label: "Shape",
        type: "toggle-group",
        options: ["pill", "icon"],
        defaultValue: "pill",
        description: "Uses a text button or a square icon button.",
      },
      {
        prop: "loading",
        label: "Loading",
        type: "boolean",
        description:
          "Shows progress while preserving the button label and width.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents interaction with the native button.",
      },
      {
        prop: "static",
        label: "Static",
        type: "boolean",
        description:
          "Removes tactile scale feedback for motion-sensitive contexts.",
      },
    ],
  },
  {
    path: "input",
    name: "Input",
    description:
      "Collects a single line of text or another native input value.",
    notes: [
      "Pair every input with a visible label or an equivalent accessible name.",
      "Use aria-invalid when validation fails and describe the error nearby.",
      "Native input attributes such as type and autoComplete pass through.",
    ],
    props: [
      {
        prop: "material",
        label: "Material",
        type: "toggle-group",
        options: ["paper", "outline"],
        defaultValue: "outline",
        description: "Uses a filled or outlined field treatment.",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the field height and horizontal padding.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Applies a semantic border and surface tint.",
      },
      {
        prop: "aria-invalid",
        label: "Invalid",
        type: "boolean",
        description:
          "Marks the field invalid for assistive technology and styling.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents editing and removes the field from submission.",
      },
    ],
  },
  {
    path: "textarea",
    name: "Textarea",
    description: "Collects longer, multi-line text with vertical resizing.",
    notes: [
      "Use a visible label that states what kind of response is expected.",
      "Set rows for a useful initial height; the field grows and can resize vertically.",
      "Use aria-invalid and a nearby message for validation errors.",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the minimum height and padding.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Applies a semantic border and surface tint.",
      },
      {
        prop: "aria-invalid",
        label: "Invalid",
        type: "boolean",
        description:
          "Marks the field invalid for assistive technology and styling.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents editing and resizing.",
      },
    ],
  },
  {
    path: "select",
    name: "Select",
    description: "Chooses one value from a compact, keyboard-accessible menu.",
    notes: [
      "Connect SelectTrigger to a visible label with matching htmlFor and id values.",
      "SelectValue renders the current item text or its placeholder.",
      "Keep option labels concise and use SelectGroup for longer categorized lists.",
    ],
    props: [
      {
        prop: "defaultValue",
        label: "Initial value",
        type: "select",
        options: ["daily", "weekly", "monthly"],
        defaultValue: "weekly",
        description: "Sets the initially selected example option.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Disables the trigger and menu interaction.",
      },
    ],
  },
  {
    path: "slider",
    name: "Slider",
    description: "Selects one value or a bounded range along a track.",
    notes: [
      "Pass one value for a single thumb or multiple values for a range.",
      "Provide thumbLabels when multiple thumbs need distinct accessible names.",
      "Use min, max, and step to match the scale represented by the control.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Applies a semantic color to the range and thumbs.",
      },
      {
        prop: "range",
        label: "Range",
        type: "boolean",
        defaultValue: true,
        description:
          "Example-only prop that switches between two thumbs and one.",
      },
      {
        prop: "orientation",
        label: "Orientation",
        type: "toggle-group",
        options: ["horizontal", "vertical"],
        defaultValue: "horizontal",
        description: "Changes the track direction and example layout.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents pointer and keyboard value changes.",
      },
    ],
  },
  {
    path: "switch",
    name: "Switch",
    description: "Turns an immediately applied setting on or off.",
    notes: [
      "Label the setting itself rather than describing the current on or off state.",
      "Use a checkbox when users should review several selections before submitting.",
      "The thumb motion respects reduced-motion preferences.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Applies a semantic color when checked.",
      },
      {
        prop: "defaultChecked",
        label: "On by default",
        type: "boolean",
        defaultValue: true,
        description: "Sets the initial uncontrolled state.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents the setting from being changed.",
      },
    ],
  },
  {
    path: "tabs",
    name: "Tabs",
    description:
      "Switches between related sections without leaving the current view.",
    notes: [
      "Each Tab id must match the id of its TabPanel.",
      "Give TabList an accessible label when surrounding context is not enough.",
      "Tabs and panels preserve React Aria render-function className props.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Applies a semantic color to the selected tab indicator.",
      },
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets tab height and horizontal padding.",
      },
      {
        prop: "isDisabled",
        label: "Disabled",
        type: "boolean",
        description: "Disables interaction for the full tab set.",
      },
    ],
  },
  {
    path: "toggle-group",
    name: "Toggle Group",
    description:
      "Groups related toggle buttons into a single selection control.",
    notes: [
      "Choose type single for one selection or multiple for independent selections.",
      "Give the group and icon-only items accessible labels.",
      "Keep choices short and mutually understandable at a glance.",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets item height and horizontal padding.",
      },
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "primary",
        description: "Applies a semantic color to selected items.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents every item from being toggled.",
      },
    ],
  },
  {
    path: "checkbox",
    name: "Checkbox",
    description:
      "Toggles an independent choice between checked and unchecked states.",
    notes: [
      "Use a label that describes the checked state in affirmative language.",
      "The mixed state is available through checked=indeterminate.",
      "Group related checkboxes with a fieldset and legend when context is shared.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Applies a semantic color when checked.",
      },
      {
        prop: "defaultChecked",
        label: "Checked by default",
        type: "boolean",
        description: "Sets the initial uncontrolled state.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents the choice from being changed.",
      },
    ],
  },
  {
    path: "radio",
    name: "Radio Group",
    description: "Selects exactly one choice from a visible set of options.",
    notes: [
      "Every RadioGroupItem needs a unique value and an associated label.",
      "Use Radio Group when comparing all options is more useful than a Select menu.",
      "Set a default only when one choice is safe to preselect.",
    ],
    props: [
      {
        prop: "scheme",
        label: "Scheme",
        type: "select",
        options: allSchemes,
        defaultValue: "default",
        description: "Applies a semantic color to the selected item.",
      },
      {
        prop: "defaultValue",
        label: "Initial value",
        type: "select",
        options: ["comfortable", "compact", "spacious"],
        defaultValue: "comfortable",
        description: "Sets the initially selected density option.",
      },
      {
        prop: "disabled",
        label: "Disabled",
        type: "boolean",
        description: "Prevents selection changes for the whole group.",
      },
    ],
  },
  {
    path: "color-picker",
    name: "Color Picker",
    description:
      "Combines two-dimensional, channel, swatch, and text color controls.",
    notes: [
      "Wrap related controls in ColorPicker so they share a single color value.",
      "Label channel sliders and the text field for keyboard and screen-reader users.",
      "Color components preserve React Aria render-function children and className props.",
    ],
    props: [
      {
        prop: "defaultValue",
        label: "Initial color",
        type: "string",
        defaultValue: "#6366f1",
        description:
          "Sets the initial uncontrolled color as a CSS color string.",
      },
      {
        prop: "isDisabled",
        label: "Disabled",
        type: "boolean",
        description: "Disables the picker and its composed controls.",
      },
    ],
  },
  {
    path: "label",
    name: "Label",
    description: "Names a form control and expands its clickable target.",
    notes: [
      "Match htmlFor to the associated control id.",
      "Keep labels visible; placeholders should provide examples rather than names.",
      "Disabled peer and group states automatically reduce label emphasis.",
    ],
    props: [
      {
        prop: "size",
        label: "Size",
        type: "toggle-group",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
        description: "Sets the label text size.",
      },
    ],
  },
];
