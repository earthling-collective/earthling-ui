import React from "react";
import { Pressable, Text, TextProps, View, ViewProps } from "react-native";
import clsx from "clsx";
import { LinkProps } from "../Link";
import Ionicon from "react-native-vector-icons/Ionicons";
import colors from "../../theme.colors";

export type AlertProps = {
  message?: string;
  variant?: "subtle" | "text";
  _Text?: TextProps;
  _Close?: LinkProps;
  onClose?: () => void;
} & ViewProps;
export function Alert(props: AlertProps) {
  const {
    className,
    message,
    variant = "text",
    onClose,
    _Text,
    _Close,
    ...rest
  } = props;

  return (
    <View
      {...rest}
      className={clsx(
        "flex-row justify-between px-2 border-[1px] border-[transparent] rounded-lg",
        { "bg-error-subtle py-1": variant === "subtle" },
        className
      )}
    >
      <Text
        {..._Text}
        className={clsx(
          "text-error-empty-text text-xs",
          { "text-error-subtle-text": variant === "subtle" },
          _Text?.className
        )}
      >
        {message}
      </Text>
      {onClose && (
        <Pressable className="active:opacity-50" onPress={onClose}>
          <Ionicon name="close" size={14} color={colors.error["empty-text"]} />
        </Pressable>
      )}
    </View>
  );
}
