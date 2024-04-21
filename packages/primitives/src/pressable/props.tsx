import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { TextProps } from "#text";
import type { ICustomPrimitiveProps } from "../types";

type NativeProps = BasePressableProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
>;

//overridable
export interface ICustomPressableProps {}

export type PressableProps = Omit<NativeProps, "onPress"> &
  Omit<WebProps, "onClick"> &
  ICustomPressableProps &
  ICustomPrimitiveProps & {
    onPress?: NativeProps["onPress"] | WebProps["onClick"];
    onClick?: NativeProps["onPress"] | WebProps["onClick"];
    _Text?: TextProps;
  };
