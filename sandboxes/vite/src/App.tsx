import { Box, Text } from "@earthling-ui/primitives";
import { atomic, defaultColorTokens, styled } from "@earthling-ui/styling";
import { useEffect, useState } from "react";

atomic("w-full h-[300px] inset-0");

const BizzBox = styled(Box)
  .using(defaultColorTokens)
  .extend({
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    color: "#77FF77",

    "[foo]": {
      backgroundColor: "$blue.500",
      color: "#000000",

      "[bizz]": {
        color: "$blue.800",
      },

      "[buzz]": {
        color: "$blue.200",
      },
    },

    "[bar]": {
      backgroundColor: "$red.500",
      color: "#000000",

      "[bizz]": {
        color: "$red.200",
      },

      "[buzz]": {
        color: "$red.800",
      },
    },
  })
  .build();

const useFlippingCondition = (timeout: number, on: string, off: string) => {
  const [condition, setCondition] = useState(on);
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
    <BizzBox
      extended={{ ...atomic("w-full"), backgroundColor: "$yellow.500" }}
      with={[condition1, { [condition2]: true }]}
    >
      <Text>hello?</Text>
    </BizzBox>
  );
}

export default App;
