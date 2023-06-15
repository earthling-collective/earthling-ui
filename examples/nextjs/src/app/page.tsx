import { useState } from "react";
import { Button } from "earthling-ui";

export default function App() {
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
