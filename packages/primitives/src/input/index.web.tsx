import { forwardRef } from "react";
import { Text } from "#text";
import { Box, BoxRef } from "#box";
import { InputProps } from "./props";

export type { InputProps };
export type InputRef = BoxRef;

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { label, jss, style, _Control, _Label, ...rest } = props;

  return (
    <Box ref={ref} {...rest} style={Object.assign({}, jss, style)}>
      <input
        {..._Control}
        style={Object.assign({}, _Control?.jss, _Control?.style)}
      />
      {label !== undefined && <Text {..._Label}>{label}</Text>}
    </Box>
  );
});
