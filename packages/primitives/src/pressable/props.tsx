import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "#text";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = BasePressableProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
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

export type PressableProps = Omit<NativeProps, "onPress"> &
  Omit<WebProps, "onClick"> &
  PressableApplicationState &
  ICustomPressableProps &
  ICustomPrimitiveProps & {
    onPress?: NativeProps["onPress"] | WebProps["onClick"];
    onClick?: NativeProps["onPress"] | WebProps["onClick"];
    _Text?: TextProps;
  };
