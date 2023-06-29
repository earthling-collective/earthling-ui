import {
  Box as BaseBox,
  type BoxProps as BaseBoxProps,
} from "@earthling-ui/primitives/box";
import { styled } from "@earthling-ui/primitives";

export type BoxProps = BaseBoxProps;

export const Box = styled<BoxProps>(styled(BaseBox, { color: "blue" }), {
  backgroundColor: "red",
  width: "100px",
  height: "100px",
});
