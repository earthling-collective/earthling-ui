import "@zabukit/web/css";
import { useState } from "react";
import { Button } from "@zabukit/web";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="minimal">test</Button>
    </>
  );
}

export default App;
