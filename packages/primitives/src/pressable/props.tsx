import type { PressableProps as BasePressableProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { TextProps } from "#text";
import { Applicable } from "../apply";
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

export type PressableProps = Applicable<
  Omit<NativeProps, "onPress"> &
    Omit<WebProps, "onClick"> & {
      onPress?: NativeProps["onPress"] | WebProps["onClick"];
      onClick?: NativeProps["onPress"] | WebProps["onClick"];
      _Text?: TextProps;
    } & PressableApplicationState &
    ICustomPressableProps &
    ICustomPrimitiveProps,
  PressableApplicationState
>;
