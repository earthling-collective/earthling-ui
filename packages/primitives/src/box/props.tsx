import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import type { Properties } from "csstype";
import { IStylable } from "..";

type NativeProps = Omit<ViewProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref" | "style"
>;

export interface ICustomBoxProps {}
export interface ICustomPrimitiveProps {}

export type BoxApplicationState = {
  loading?: boolean;
  disabled?: boolean;
};

export type BoxProps = NativeProps &
  WebProps &
  BoxApplicationState &
  IStylable &
  ICustomBoxProps &
  ICustomPrimitiveProps & { style?: Properties; _Text?: TextProps };
