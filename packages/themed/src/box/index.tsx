import {
  Box as BaseBox,
  type BoxProps as BaseBoxProps,
} from "@earthling-ui/primitives/box";
import { styled } from "@earthling-ui/stylist";

export type BoxProps = BaseBoxProps;

export const Box = styled(BaseBox, {
  backgroundColor: "red",
  width: "100px",
  height: "100px",
});
