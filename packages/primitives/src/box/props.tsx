import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";

type NativeProps = ViewProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref"
>;

export type BoxProps = NativeProps & WebProps & { _Text?: TextProps };
