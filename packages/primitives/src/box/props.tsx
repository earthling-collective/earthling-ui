import type { ComponentPropsWithoutRef } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = ViewProps;

type WebProps = ComponentPropsWithoutRef<"div">;

export interface ICustomBoxProps {}

export type DescendantProps = {
  _Text?: TextProps;
};

export type BoxProps = NativeProps &
  WebProps &
  DescendantProps &
  ICustomBoxProps &
  ICustomPrimitiveProps;
