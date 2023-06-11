import { useState } from "react";
import { Button } from "@zabukit/web";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <Button variant="contained" _Pressable={{ className: "rounded-lg" }}>
        test
      </Button>
      <Button variant="outlined">test</Button>
      <Button variant="minimal">test</Button>
    </div>
  );
}

export default App;
