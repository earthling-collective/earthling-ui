import Content from "./content.mdx";
import { Box } from "@earthling-ui/themed";

export default function HomePage() {
  return (
    <main>
      <Box
        sx={{
          borderRadius: "8px",
          width: "80px",
          height: "80px",
          backgroundColor: "black",
        }}
      />
      <Content />
    </main>
  );
}
