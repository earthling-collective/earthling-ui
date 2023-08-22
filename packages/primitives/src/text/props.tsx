import type { TextProps as BaseTextProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = BaseTextProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  "ref"
>;
//overridable
export interface ICustomTextProps {}

export type TextProps = WebProps &
  NativeProps &
  ICustomTextProps &
  ICustomPrimitiveProps;
