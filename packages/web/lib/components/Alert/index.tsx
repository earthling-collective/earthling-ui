import clsx from "clsx";
import { LinkProps } from "../Link";
import { DivElementProps } from "../../types";

export type AlertProps = {
  message?: string;
  variant?: "subtle" | "text";
  _Text?: DivElementProps;
  _Close?: LinkProps;
  onClose?: () => void;
} & DivElementProps;

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
    <div
      {...rest}
      className={clsx(
        "flex-row justify-between px-2 border-[1px] border-[transparent] rounded-lg",
        { "bg-error-subtle py-1": variant === "subtle" },
        className
      )}
    >
      <div
        {..._Text}
        className={clsx(
          "text-error-empty-text text-xs",
          { "text-error-subtle-text": variant === "subtle" },
          _Text?.className
        )}
      >
        {message}
      </div>
      {onClose && (
        <div className="active:opacity-50" onClick={onClose}>
          <div className="i-ion-close text-empty-text text-[14px]" />
        </div>
      )}
    </div>
  );
}
