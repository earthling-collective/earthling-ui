import { View, ViewProps } from "react-native";
import React, { Children } from "react";
import { animated, useSpring } from "@react-spring/native";
import clsx from "clsx";

export type SliderProps = {
  active?: number;
  width?: number;
  _Slide?: ViewProps;
} & ViewProps;

export default function Slider(props: SliderProps) {
  const { active = 0, className, width = 0, children, _Slide, ...rest } = props;

  const { activeSpring } = useSpring({ activeSpring: active });

  return (
    <View {...rest} className={clsx("", className)}>
      {Children.map(children, (x, i) => (
        <animated.View
          key={i}
          {..._Slide}
          className={clsx(
            "absolute left-0 top-0 right-0 bottom-0",
            _Slide?.className
          )}
          style={[
            {
              transform: [
                {
                  translateX: activeSpring.to([0 + i, 1 + i], [0, -width]),
                },
              ],
            },
            _Slide?.style,
          ]}
        >
          {x}
        </animated.View>
      ))}
    </View>
  );
}
