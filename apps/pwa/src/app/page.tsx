import { Input } from "earthling-ui/input";
import { Button } from "earthling-ui/button";

export default function Home() {
  return (
    <div className="p-12">
      <Button>Hello</Button>

      <div className="test">test</div>

      <Input placeholder="input" />
    </div>
  );
}
