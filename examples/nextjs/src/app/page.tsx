import { Box } from "@earthling-ui/components/box";
import { Button } from "@earthling-ui/components/button";

export default function App() {
  return (
    <Box className="space-y-4">
      <Button variant="contained">test</Button>
      <Button variant="outlined">test</Button>
      <Button variant="text">test</Button>
    </Box>
  );
}
