import { useState } from "react";
import { Box } from "@earthling-ui/themed/box";
import { Button } from "@earthling-ui/themed/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box style={{ color: "white" }}>
      {count}
      <Button
        variant="contained"
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        test
      </Button>
      <Button variant="outlined">test</Button>
      <Button variant="text">test</Button>
    </Box>
  );
}

export default App;
