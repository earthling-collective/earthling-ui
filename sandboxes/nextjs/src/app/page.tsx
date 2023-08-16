import { Box } from "@earthling-ui/primitives";
import { Button } from "@earthling-ui/themed";

export default function App() {
  return (
    <Box className="space-x-4" jss={{ background: "blue", padding: "4px" }}>
      <Button variant="contained">test</Button>
      <Button variant="outlined">test</Button>
      <Button variant="text">test</Button>
    </Box>
  );
}
