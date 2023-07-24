import {
  Box as BaseBox,
  type BoxProps as BaseBoxProps,
} from "@earthling-ui/primitives";
import { styled } from "@earthling-ui/styled";

export type BoxProps = BaseBoxProps;

export const Box = styled<BoxProps>(BaseBox, {});
