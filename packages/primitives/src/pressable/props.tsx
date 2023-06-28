import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "#text";
import type { Applicable } from "../apply";
import type { ICustomPrimitiveProps } from "../types";
import type { Properties } from "csstype";

type NativeProps = Omit<BasePressableProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref" | "style"
>;

//overridable
export interface ICustomPressableProps {}

export type PressableApplicationState = {
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
};

export type PressableProps = Applicable<
  Omit<NativeProps, "onPress"> &
    Omit<WebProps, "onClick"> &
    PressableApplicationState &
    ICustomPressableProps &
    ICustomPrimitiveProps & {
      style?: Properties;
      onPress?: NativeProps["onPress"] | WebProps["onClick"];
      onClick?: NativeProps["onPress"] | WebProps["onClick"];
      _Text?: TextProps;
    },
  PressableApplicationState
>;
