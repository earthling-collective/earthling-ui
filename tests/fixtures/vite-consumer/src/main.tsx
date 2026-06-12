import { createRoot } from "react-dom/client";
import { Button } from "earthling-ui/button";
import { Badge } from "earthling-ui/badge";
import { Kbd } from "earthling-ui/kbd";
import "earthling-ui/index.css";
import "earthling-ui/themes/dark.css";

function App() {
  return (
    <main>
      <Button scheme="primary">Click me</Button>
      <Badge scheme="good">It works</Badge>
      <Kbd>⌘K</Kbd>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
