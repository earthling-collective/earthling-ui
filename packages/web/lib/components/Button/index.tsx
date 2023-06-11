//import Validations from "../Validations";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Za, useButton } from "@zabukit/shared";

export type ButtonProps = Za.Button<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export function Button(props: ButtonProps) {
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
    <div {...rest} className={className}>
      <button {..._Pressable}>
        {typeof children === "string" ? (
          <span {..._Text}>{children}</span>
        ) : (
          children
        )}
      </button>
      {/* <Validations {..._Validations} /> */}
    </div>
  );
}
