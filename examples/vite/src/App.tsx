import { useState } from "react";
import { Button } from "@earthling-ui/components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
}

export default App;
