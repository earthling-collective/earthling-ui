import { Box as PrimitiveBox, Text } from "@earthling-ui/primitives";
import { StyleTree, makeTheme } from "@earthling-ui/styling";
import { ComponentProps, ComponentType, useEffect, useState } from "react";

function styled<
  C extends ComponentType<CProps>,
  CProps = ComponentProps<C>,
  PropsWithConditions = CProps & { conditions: Condition | ConditionList }
>(
  Component: C,
  ...styleTrees: StyleTree[]
): ComponentType<PropsWithConditions> {
  let theme = makeTheme({}, {});
  for (var styleTree of styleTrees) {
    theme = theme.extend(styleTree);
  }

  return (props: PropsWithConditions) => {
    const { style, conditions, ...rest } = props;
    const conditionStyles = theme.tag(conditions);
    return (
      <Component
        {...(rest as CProps)}
        style={Object.assign({}, conditionStyles, style)}
      />
    );
  };
}

const Box = styled(PrimitiveBox, {
  width: "100px",
  height: "100px",
  backgroundColor: "green",
  color: "#77FF77",

  "[foo]": {
    backgroundColor: "blue",
    color: "#000000",

    "[bizz]": {
      color: "#7777FF",
    },

    "[buzz]": {
      color: "#DDDDFF",
    },
  },

  "[bar]": {
    backgroundColor: "red",
    color: "#000000",

    "[bizz]": {
      color: "#FF7777",
    },

    "[buzz]": {
      color: "#FFDDDD",
    },
  },
});

type ConditionMap = Record<string, boolean | undefined>;
type ConditionList = Condition[];
type Condition = string | ConditionMap | ConditionList;

const useFlippingCondition = (timeout: number, on: string, off: string) => {
  const [condition, setCondition] = useState("foo");
  useEffect(() => {
    const interval = setInterval(() => {
      setCondition((x) => (x === on ? off : on));
    }, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [timeout, on, off]);
  return condition;
};

function App() {
  const condition1 = useFlippingCondition(3000, "foo", "bar");
  const condition2 = useFlippingCondition(5200, "bizz", "buzz");

  return (
    <Box conditions={[condition1, condition2]}>
      <Text>hello?</Text>
    </Box>
  );
}

export default App;
