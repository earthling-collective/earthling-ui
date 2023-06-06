import clsx from "clsx";
import { Validations, ValidationsProps } from "../Validations";
import { DivElementProps, ButtonElementProps } from "../../types";

export type ButtonProps = {
  variant?: "contained" | "outlined" | "minimal";
  size?: "lg" | "md" | "sm";
  _Text?: DivElementProps;
  _Pressable?: ButtonElementProps;
  _Validations?: ValidationsProps;
} & DivElementProps &
  Pick<ButtonElementProps, "onClick">;

export function Button(props: ButtonProps) {
  const {
    variant = "contained",
    size = "md",
    children,
    className,
    _Text,
    _Pressable,
    _Validations,
    onClick,
    ...rest
  } = props;

  return (
    <div {...rest} className={className}>
      <button
        onClick={onClick}
        {..._Pressable}
        className={clsx(
          "rounded-full px-2 h-14 w-full min-w-[56px] items-center justify-center b-solid cursor-pointer",
          {
            //variants
            "bg-primary-main hover:bg-primary-main-hover active:bg-primary-main-active b-[transparent]":
              variant === "contained",
            "border-[2px] b-primary-main active:b-primary-main-active active:bg-primary-empty-active":
              variant === "outlined",
            "bg-primary-empty active:bg-primary-empty-active b-[transparent]":
              variant === "minimal",
            //sizes
            "h-8 min-w-[32px] rounded-full": size === "sm",
          },
          _Pressable?.className
        )}
      >
        {typeof children === "string" ? (
          <div
            {..._Text}
            className={clsx(
              "color-primary-text font-bold",
              {
                "color-primary-text font-normal": variant === "minimal",
                "text-sm": size === "sm",
              },
              _Text?.className
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </button>
      <Validations {..._Validations} />
    </div>
  );
}
