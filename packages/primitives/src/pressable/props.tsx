import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "#text";
import { IStylable } from "..";

type NativeProps = Omit<BasePressableProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref" | "style"
>;

//overridable
export interface ICustomPressableProps {}
export interface ICustomPrimitiveProps {}

export type PressableApplicationState = {
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
};

export type PressableProps = Omit<NativeProps, "onPress"> &
  Omit<WebProps, "onClick"> &
  PressableApplicationState &
  IStylable &
  ICustomPressableProps &
  ICustomPrimitiveProps & {
    onPress?: NativeProps["onPress"] | WebProps["onClick"];
    onClick?: NativeProps["onPress"] | WebProps["onClick"];
    _Text?: TextProps;
  };
