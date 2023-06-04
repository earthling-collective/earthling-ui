import clsx from "clsx";
import { DivElementProps } from "../../types";

export type LinkProps = {
  variant?: "text";
  _Text?: DivElementProps;
} & DivElementProps;

export function Link(props: LinkProps) {
  const { variant = "contained", children, className, _Text, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx("active:bg-white-100 active:underline", className)}
    >
      {typeof children === "string" ? (
        <div {..._Text} className={clsx("underline", _Text?.className)}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
