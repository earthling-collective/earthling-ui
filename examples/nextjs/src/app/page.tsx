import { Button } from "@earthling-ui/components/button";
import { WebComponentsProvider } from "@earthling-ui/components/web";

export default function App() {
  return (
    <WebComponentsProvider>
      <div className="space-y-4">
        <Button variant="contained" _Pressable={{ className: "rounded-lg" }}>
          test
        </Button>
        <Button variant="outlined">test</Button>
        <Button variant="minimal">test</Button>
      </div>
    </WebComponentsProvider>
  );
}
