import type { TextProps as BaseTextProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type NativeProps = BaseTextProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  "ref"
>;

export type TextProps = WebProps & NativeProps;
