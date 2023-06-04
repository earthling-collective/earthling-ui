import clsx from "clsx";
import { Alert, AlertProps } from "../Alert";
import { DivElementProps } from "../../types";

export type ValidationsProps = {
  _Alert?: AlertProps;
  errors?: Error[];
  onErrorClose?: (i: number) => void;
} & DivElementProps;

export function Validations(props: ValidationsProps) {
  const { children, className, errors, onErrorClose, _Alert, ...rest } = props;

  if (!errors) return null;

  return (
    <div {...rest} className={clsx("space-y-1 mt-1", className)}>
      {errors.map((x, i) => (
        <Alert
          key={i}
          message={x.message}
          {..._Alert}
          onClose={() => {
            onErrorClose?.(i);
            _Alert?.onClose?.();
          }}
        />
      ))}
    </div>
  );
}
