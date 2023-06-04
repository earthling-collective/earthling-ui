import {
  Pressable,
  PressableProps,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import clsx from "clsx";
import Validations, { ValidationsProps } from "../Validations";

export type ButtonProps = {
  variant?: "contained" | "outlined" | "minimal";
  size?: "lg" | "md" | "sm";
  _Text?: TextProps;
  _Pressable?: PressableProps;
  _Validations?: ValidationsProps;
} & ViewProps &
  Pick<PressableProps, "onPress">;

export default function Button(props: ButtonProps) {
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
      <Pressable
        onPress={onPress}
        {..._Pressable}
        className={clsx(
          "rounded-full px-2 h-14 w-full min-w-[56px] items-center justify-center",
          {
            //variants
            "bg-primary-main active:bg-primary-main-active":
              variant === "contained",
            "border-[2px] border-solid border-primary-main active:border-primary-main-active active:bg-primary-empty-active":
              variant === "outlined",
            "bg-primary-empty active:bg-primary-empty-active":
              variant === "minimal",
            //sizes
            "h-8 min-w-[32px] rounded-full": size === "sm",
          },
          _Pressable?.className
        )}
      >
        {typeof children === "string" ? (
          <Text
            {..._Text}
            className={clsx(
              "color-white font-bold",
              {
                "color-primary-text font-normal": variant === "minimal",
                "text-sm": size === "sm",
              },
              _Text?.className
            )}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
      <Validations {..._Validations} />
    </View>
  );
}
