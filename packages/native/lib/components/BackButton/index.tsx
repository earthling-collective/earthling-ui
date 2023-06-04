import React from "react";
import Button, { ButtonProps } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import clsx from "clsx";
import { Text, TextProps } from "react-native";

export type BackButtonProps = {
  onPress?: () => void;
  _Text?: TextProps;
} & Omit<ButtonProps, "onPress">;

export default function BackButton(props: BackButtonProps) {
  const { className, onPress, children, _Text, ...rest } = props;

  const { canGoBack } = useNavigation();
  useBackHandler(() => {
    if (!onPress) return false;
    onPress?.();
    return true;
  });

  if (!canGoBack) return null;

  return (
    <Button
      size="sm"
      variant="minimal"
      {...rest}
      onPress={onPress}
      className={clsx("", className)}
    >
      {typeof children === "string" ? (
        <Text {..._Text} className={clsx("", _Text?.className)}>
          {children}
        </Text>
      ) : (
        children || <Ionicons name="arrow-back" size={28} />
      )}
    </Button>
  );
}
