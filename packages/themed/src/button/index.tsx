import {
  Pressable,
  type PressableProps,
} from "@earthling-ui/primitives/pressable";
import { styled } from "@earthling-ui/stylist";

export type ButtonProps = PressableProps & {
  variant?: "contained" | "outlined" | "subtle" | "text";
  size?: "sm" | "md" | "lg";
  error?: boolean;
  loading?: boolean;
};

export const Button = styled(Pressable, {
  backgroundColor: "transparent",
  borderRadius: "4px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  cursor: "pointer",

  "&>label": {
    color: "$text.default",
  },

  "&[variant=contained]": {
    backgroundColor: "$primary.main",

    "&>label": {
      color: "$primary.text",
    },

    ":hover": {
      backgroundColor: "$primary.hover",
    },
    ":pressed": {
      backgroundColor: "primary.pressed",
    },
  },

  "&[variant=outlined]": {
    backgroundColor: "transparent",
    borderColor: "$primary.main",
    ":hover": {
      borderColor: "primary.hover",
    },
    ":pressed": {
      borderColor: "primary.pressed",
    },
  },

  "&[variant=text]": {
    backgroundColor: "transparent",
    borderColor: "transparent",

    ":hover": {
      borderColor: "primary.hover",
    },

    ":pressed": {
      borderColor: "primary.pressed",
    },
  },

  "&:disabled": {
    opacity: 0.6,
  },
});
