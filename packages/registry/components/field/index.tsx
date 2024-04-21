import { Box, BoxProps, BoxRef } from "@ecol-ui/primitives/box";
import { forwardRef, useContext } from "react";
import { createContext } from "vm";

type FieldContextValue = {};
const FieldContext = createContext<FieldContextValue>();
export const useField = () => useContext(FieldContext);

export const Field = forwardRef<BoxRef, BoxProps>((props, ref) => {
  const { ...rest } = props;
  return (
    <FieldContext value={{}}>
      <Box ref={ref} {...rest} />
    </FieldContext>
  );
});

export const FieldLabel = forwardRef<BoxRef, BoxProps>((props, ref) => {
  const { ...rest } = props;
  return <Box ref={ref} {...rest} />;
});

export const FieldControl = forwardRef<BoxRef, BoxProps>((props, ref) => {
  const { ...rest } = props;
  return <Box ref={ref} {...rest} />;
});
