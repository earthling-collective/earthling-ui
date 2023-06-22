import { useState } from "react";
import { WebComponentsProvider } from "@earthling-ui/components/web";
import { Button } from "@earthling-ui/components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WebComponentsProvider>
      <div className="space-y-4">
        {count}
        <Button
          variant="contained"
          onClick={() => {
            setCount((x) => x + 1);
          }}
          _Pressable={{ className: "rounded-lg bg-blue" }}
        >
          test
        </Button>
        <Button variant="outlined">test</Button>
        <Button variant="minimal">test</Button>
      </div>
    </WebComponentsProvider>
  );
}

export default App;
