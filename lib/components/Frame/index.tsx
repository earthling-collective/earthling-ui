import { createContext, ReactNode, useContext, useMemo } from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { APP_MARGIN_X, APP_MARGIN_Y } from "../../../vars";
import { useKeyboard } from "@react-native-community/hooks";

type Sides = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  isRoot: boolean;
};
type FrameContexValue = Sides;

const FrameContext = createContext<FrameContexValue>({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  isRoot: true,
});

const useFrame = () => useContext(FrameContext);

const Frame = (
  props: {
    children?: ReactNode;
  } & Partial<Sides>
) => {
  const { children } = props;
  const insets = useSafeAreaInsets();
  const frame = useFrame();
  const { keyboardHeight, keyboardShown } = useKeyboard();

  const top = useMemo(
    () => (!!frame.isRoot ? insets.top + APP_MARGIN_Y : 0) + (props.top || 0),
    [props.top, frame.top, frame.isRoot, insets.top]
  );
  const bottom = useMemo(
    () =>
      (!!frame.isRoot
        ? keyboardShown && Platform.OS !== "android"
          ? keyboardHeight + APP_MARGIN_Y
          : insets.bottom + APP_MARGIN_Y
        : 0) + (props.bottom || 0),
    [
      props.bottom,
      frame.bottom,
      frame.isRoot,
      insets.bottom,
      keyboardShown,
      keyboardHeight,
    ]
  );
  const left = useMemo(
    () => (!!frame.isRoot ? insets.left + APP_MARGIN_X : 0) + (props.left || 0),
    [props.left, frame.left, frame.isRoot, insets.left]
  );
  const right = useMemo(
    () =>
      (!!frame.isRoot ? insets.right + APP_MARGIN_X : 0) + (props.right || 0),
    [props.right, frame.right, frame.isRoot, insets.right]
  );

  const value = useMemo(
    () => ({ top, bottom, left, right, isRoot: false }),
    [top, bottom, left, right]
  );

  return (
    <FrameContext.Provider value={value}>{children}</FrameContext.Provider>
  );
};

export { useFrame };
export default Frame;
