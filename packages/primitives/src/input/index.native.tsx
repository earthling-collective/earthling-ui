import { forwardRef } from "react";
import { TextInput } from "react-native";
import { Text } from "#text";
import { Box, BoxRef } from "#box";
import { InputProps } from "./props";
import cssToReactNative from "css-to-react-native";

export type { InputProps };
export type InputRef = BoxRef;

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { label, style, _Control, _Label, ...rest } = props;

  return (
    <Box
      ref={ref}
      {...rest}
      style={cssToReactNative(Object.entries(style || {}))}
    >
      <TextInput
        {..._Control}
        style={cssToReactNative(Object.entries(_Control?.style || {}))}
      />
      {label !== undefined && <Text {..._Label}>{label}</Text>}
    </Box>
  );
});
