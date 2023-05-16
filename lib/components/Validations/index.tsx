import { View, ViewProps } from "react-native";
import clsx from "clsx";
import { Alert, AlertProps } from "../Alert";

export type ValidationsProps = {
  _Alert?: AlertProps;
  errors?: Error[];
  onErrorClose?: (i: number) => void;
} & ViewProps;

export default function Validations(props: ValidationsProps) {
  const { children, className, errors, onErrorClose, _Alert, ...rest } = props;

  if (!errors) return null;

  return (
    <View {...rest} className={clsx("space-y-1 mt-1", className)}>
      {errors.map((x, i) => (
        <Alert
          key={i}
          message={x.message}
          {..._Alert}
          onClose={() => {
            onErrorClose?.(i);
            _Alert?.onClose();
          }}
        />
      ))}
    </View>
  );
}
