import { Pressable, type PressableProps } from "@earthling-ui/primitives";
import { theme } from "../theme";
import { ReactNode } from "react";

export type ButtonProps = PressableProps & {
  variant?: "contained" | "outlined" | "subtle" | "text";
  size?: "sm" | "md" | "lg";
  error?: boolean;
  loading?: boolean;
};

theme.extend({
  "[button]": {
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

export function Button(props: { children?: ReactNode } & PressableProps) {
  const { children, ...rest } = props;
  return <Pressable {...rest}>{children}</Pressable>;
}
