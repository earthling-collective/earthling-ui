import { Pressable, type PressableProps } from "@earthling-ui/primitives";
import { styled, tailwind } from "@earthling-ui/styled";

export type ButtonProps = PressableProps & {
  variant?: "contained" | "outlined" | "subtle" | "text";
  size?: "sm" | "md" | "lg";
  error?: boolean;
  loading?: boolean;
};

export const Button = styled<ButtonProps>(Pressable, {
  backgroundColor: "#FFF",
  color: "#000",

  "[background]": {
    "[gradient]": {
      start: "#DDD",
      end: "#222",
    },
  },

  "[button]": {
    ...tailwind(""),
    backgroundColor: "$primary",

    "[focus]": {
      backgroundColor: "$primary.focus",
    },

    "[press]": {
      backgroundColor: "$primary.active",
    },

    "[outlined]": {
      backgroundColor: "transparent",
      borderColor: "$primary",

      "[focus]": {
        color: "$primary.focus",
      },

      "[press]": {
        borderColor: "$primary.active",
      },
    },

    "[minimal]": {
      backgroundColor: "transparent",

      "[focus]": {
        backgroundColor: "$primary.focus",
      },

      "[press]": {
        backgroundColor: "$primary.subtle",
      },
    },

    "[text]": {
      color: "$primary.contrast",

      "[outlined]": {
        color: "$primary",

        "[focus]": {
          color: "$primary.focus",
        },

        "[press]": {
          color: "$primary.active",
        },
      },

      "[minimal]": {
        color: "$primary.contrast",
      },
    },
  },
});
