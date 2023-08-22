import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = ViewProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref"
>;

export interface ICustomBoxProps {}

export type DescendantProps = {
  _Text?: TextProps;
};

export type BoxProps = NativeProps &
  WebProps &
  DescendantProps &
  ICustomBoxProps &
  ICustomPrimitiveProps;
