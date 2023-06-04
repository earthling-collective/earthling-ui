import clsx from "clsx";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { TextProps, ViewProps, Animated, useAnimatedValue } from "react-native";

const fmtChars = ["$", ",", "."];

export type CounterRef = {
  type: (input: number | string | ".") => void;
  backspace: () => void;
  shake: () => Promise<void>;
};

export type CounterProps = {
  value: number;
  onChange?: (value: number) => void;
  onValidationError?: (error: Error) => void;
  _Text?: TextProps;
  maxWidth?: number;
  maxDigits?: number;
} & Omit<ViewProps, "children">;

const Counter = forwardRef<CounterRef, CounterProps>(
  (props: CounterProps, ref) => {
    const {
      className,
      value,
      style,
      maxWidth,
      maxDigits = 6,
      onLayout,
      onChange,
      onValidationError,
      _Text,
      ...rest
    } = props;

    const scale = useAnimatedValue(1);
    const shakeX = useAnimatedValue(0);
    const [decimalMode, setDecimalMode] = useState(false);

    const text = useMemo(() => {
      return `$${(Math.round(value * 100) / 100).toLocaleString()}`;
    }, [value, decimalMode]);

    const parse = useCallback(
      (next: number | string) => {
        let nextNum = typeof next === "string" ? parseFloat(next || "0") : next;
        if (Number.isNaN(nextNum)) throw new Error("Invalid number");
        if (maxDigits && nextNum.toString().length > maxDigits)
          throw new Error("");
        return nextNum || 0;
      },
      [maxDigits]
    );

    const shake = useCallback(async () => {
      await new Promise((resolve) =>
        Animated.sequence([
          Animated.timing(shakeX, {
            toValue: 10,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: -10,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: 10,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ]).start(resolve)
      );
    }, []);

    const type: CounterRef["type"] = useCallback(
      (input) => {
        let next: string = value.toString();
        next += typeof input === "number" ? input.toString() : input;
        try {
          onChange?.(parse(next));
        } catch {
          shake();
        }
      },
      [value]
    );

    const backspace: CounterRef["backspace"] = useCallback(() => {
      let next: string = value.toString().split("").slice(0, -1).join("");
      try {
        onChange?.(parse(next));
      } catch {
        shake();
      }
    }, [value]);

    useImperativeHandle(
      ref,
      () => ({
        shake,
        type,
        backspace,
      }),
      [type, backspace]
    );

    let wt = "";
    return (
      <Animated.View
        {...rest}
        className={clsx("flex-row", className)}
        onLayout={
          maxWidth
            ? (e) => {
                onLayout?.(e);
                if (e.defaultPrevented) return;
                const w = e.nativeEvent.layout.width;
                Animated.spring(scale, {
                  toValue: Math.min(1, maxWidth / w),
                  useNativeDriver: true,
                }).start();
              }
            : onLayout
        }
        style={[{ transform: [{ scale }, { translateX: shakeX }] }, style]}
      >
        {text.split("").map((c, i) => {
          const key = fmtChars.includes(c)
            ? `fmt__${wt.split("").filter((x) => fmtChars.includes(x)).length}`
            : `dig__${
                wt.split("").filter((x) => !fmtChars.includes(x)).length
              }`;
          wt += c;
          return (
            <Character {..._Text} key={key}>
              {c}
            </Character>
          );
        })}
      </Animated.View>
    );
  }
);
export default Counter;

function Character(props: TextProps) {
  const { children, style, ...rest } = props;
  const anim = useAnimatedValue(0);
  useEffect(() => {
    Animated.spring(anim, { toValue: 1, useNativeDriver: true }).start();
  }, []);
  return (
    <Animated.Text
      {...rest}
      style={[
        style,
        {
          transform: [
            { scale: anim },
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -10],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.Text>
  );
}
