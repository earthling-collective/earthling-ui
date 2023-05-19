import React from "react";
import { View, ViewProps } from "react-native";
import Button, { ButtonProps } from "../../components/Button";
import clsx from "clsx";
import { useFrame } from "../../components/Frame";
import { useNavigation } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks";

export type BackButtonProps = {
  _Button?: Omit<ButtonProps, "onPress">;
  onPress: () => void;
} & ButtonProps &
  ViewProps;
export default function BackButton(props: BackButtonProps) {
  const { _Button, className, style, onPress, children, ...rest } = props;
  const frame = useFrame();

  const { canGoBack } = useNavigation();
  useBackHandler(() => {
    if (!onPress) return false;
    onPress?.();
    return true;
  });

  if (!canGoBack) return null;

  return (
    <View
      {...rest}
      className={clsx(
        "absolute flex-row items-center space-x-3 z-100",
        className
      )}
      style={[{ top: frame.top + 12, left: 0 }, style]}
    >
      <View className="h-[1px] w-[20px] bg-blue-600" />
      <Button
        variant="text"
        onPress={onPress}
        size={"sm"}
        {..._Button}
        className={clsx("active:bg-blue-50 h-10", _Button?.className)}
        _Text={{
          className: clsx(
            "color-blue-600 font-semibold",
            _Button?._Text?.className
          ),
          ..._Button?._Text,
        }}
      >
        {children}
      </Button>
    </View>
  );
}
