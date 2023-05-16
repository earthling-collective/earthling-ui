import React, { ReactNode } from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import clsx from "clsx";
import { useFrame } from "../Frame";
import Paper, { PaperProps } from "../Paper";

export type ScreenProps = {
  children?: ReactNode;
  cancelMarginsX?: boolean;
  _ScrollView?: ScrollViewProps;
} & Omit<PaperProps, "children" | "colors"> &
  Pick<PaperProps, "colors">;

export default function Screen(props: ScreenProps) {
  const {
    colors = ["#F5F5F5", "#F5F5F5"],
    children,
    className,
    _ScrollView,
    ...rest
  } = props;
  const frame = useFrame();

  return (
    <Paper {...rest} colors={colors} className={clsx("flex-1", className)}>
      <ScrollView
        {...ScrollView}
        contentContainerStyle={[
          {
            flex: 1,
            paddingLeft: frame.left,
            paddingRight: frame.right,
            paddingTop: frame.top,
            paddingBottom: frame.bottom,
          },
          _ScrollView?.contentContainerStyle,
        ]}
        className={clsx("flex-1", _ScrollView?.className)}
      >
        {children}
      </ScrollView>
    </Paper>
  );
}
