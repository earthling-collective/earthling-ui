import React, { ReactNode } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { ViewProps, View } from "react-native";
import clsx from "clsx";
import themeColors from "../../../theme.colors";

export type PaperProps = {
  children?: ReactNode;
  colors?: LinearGradientProps["colors"];
  background?: ReactNode;
  _Background?: ViewProps;
} & Omit<LinearGradientProps, "children" | "colors">;

export default function Paper(props: PaperProps) {
  const {
    colors = [
      themeColors.background.default,
      themeColors.background["default-gradient"],
    ],
    children,
    className,
    background,
    _Background,
    ...rest
  } = props;
  return (
    <LinearGradient colors={colors} {...rest} className={clsx("", className)}>
      {background && (
        <View
          {..._Background}
          className={clsx(
            "absolute left-0 top-0 right-0 bottom-0 justify-center items-center",
            _Background?.className
          )}
        >
          {background}
        </View>
      )}
      {children}
    </LinearGradient>
  );
}
