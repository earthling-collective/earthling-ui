import Content from "./content.mdx";
import { Box } from "@earthling-ui/themed";

export default function HomePage() {
  return (
    <main>
      <Box
        sx={{
          borderRadius: 8,
          width: 80,
          height: 80,
          backgroundColor: "black",
        }}
      />
      <Content />
    </main>
  );
}
