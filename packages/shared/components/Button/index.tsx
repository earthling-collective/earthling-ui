import clsx from "clsx";
import { Za } from "../../types";

export const useButton = (props: Za.Button): Za.Button => {
  const {
    variant = "contained",
    size = "md",
    className,
    _Text,
    _Pressable,
    _Validations,
    onPress,
    ...rest
  } = props;

  return {
    variant,
    size,
    ...rest,
    className,
    _Validations: {
      ..._Validations,
    },
    _Text: {
      ..._Text,
      className: clsx(
        "color-text font-bold",
        {
          "color-text-inverse": variant === "contained",
          "text-sm": size === "sm",
        },
        _Text?.className
      ),
    },
    _Pressable: {
      onPress,
      ..._Pressable,
      className: clsx(
        "px-2 w-full items-center justify-center cursor-pointer b-[2px] b-solid",
        {
          //background variants
          "bg-[transparent]": variant === "minimal" || variant === "outlined",
          "bg-primary-main hover:bg-primary-hover-main active:bg-primary-active-main focus:bg-primary-focus-main":
            variant === "contained",

          //border variants
          "b-[transparent]": variant === "contained" || variant === "minimal",
          "b-primary-main hover:b-primary-hover-main active:b-primary-active-main focused:b-primary-focus-main":
            variant === "outlined",

          //sizes
          "h-14 min-w-14": size === "lg",
          "h-11 min-w-11": size === "md",
          "h-8 min-w-8": size === "sm",
        },
        _Pressable?.className
      ),
    },
  };
};
