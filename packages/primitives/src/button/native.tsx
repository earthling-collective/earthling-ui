import { Pressable, Text, View, type ViewProps } from "react-native";
import { Za } from "../types";

export type ButtonProps = Za.Button<ViewProps>;

export function Button(props: Za.Button<ViewProps>) {
  const {
    variant = "contained",
    size = "md",
    children,
    className,
    _Text,
    _Pressable,
    _Validations,
    onPress,
    ...rest
  } = props;

  return (
    <View {...rest} className={className}>
      <Pressable onPress={onPress} {..._Pressable}>
        {typeof children === "string" ? (
          <Text {..._Text}>{children}</Text>
        ) : (
          <>{children}</>
        )}
      </Pressable>
    </View>
  );
}
