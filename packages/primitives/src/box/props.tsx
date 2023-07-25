import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = Omit<ViewProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref" | "style"
>;

export interface ICustomBoxProps {}

export type BoxApplicationState = {
  loading?: boolean;
  disabled?: boolean;
};

export type DescendantProps = {
  _Text?: TextProps;
};

export type BoxProps = NativeProps &
  WebProps &
  BoxApplicationState &
  DescendantProps &
  ICustomBoxProps &
  ICustomPrimitiveProps;
