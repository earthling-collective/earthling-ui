import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "#text";

type NativeProps = BasePressableProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
>;

export type PressableProps = Omit<NativeProps, "onPress"> &
  Omit<WebProps, "onClick"> & {
    onPress?: NativeProps["onPress"] | WebProps["onClick"];
    onClick?: NativeProps["onPress"] | WebProps["onClick"];
    _Text?: TextProps;
  };
