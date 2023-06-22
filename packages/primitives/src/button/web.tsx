import { ButtonProps } from "./props";

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
  } = props;

  return (
    <div {...rest} className={className}>
      <button onClick={onPress || undefined} {..._Pressable}>
        {typeof children === "string" ? (
          <span {..._Text}>{children}</span>
        ) : (
          <>{children}</>
        )}
      </button>
    </div>
  );
}
