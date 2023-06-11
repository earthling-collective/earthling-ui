import { Pressable, Text, View, ViewProps } from "react-native";
//import Validations from "../Validations";
import { Za, useButton } from "@zabukit/shared";

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
  } = useButton(props);

  return (
    <View {...rest} className={className}>
      <Pressable {..._Pressable}>
        {typeof children === "string" ? (
          <Text {..._Text}>{children}</Text>
        ) : (
          children
        )}
      </Pressable>
      {/* <Validations {..._Validations} /> */}
    </View>
  );
}
