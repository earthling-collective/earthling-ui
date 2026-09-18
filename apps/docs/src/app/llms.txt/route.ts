import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { componentInformation } from "@/lib/component-info";
export async function GET() {
  const guide = (
    await readFile(
      resolve(process.cwd(), "../../packages/earthling-ui/llms.txt"),
      "utf8",
    )
  )
    .replaceAll("(README.md)", "(https://ui.earthling.dev/getting-started)")
    .replaceAll(
      "(dist/catalog.json)",
      "(https://ui.earthling.dev/catalog.json)",
    )
    .replace(
      /\((src\/[^)]+)\)/g,
      "(https://github.com/earthling-dev/earthling-ui/blob/main/packages/earthling-ui/$1)",
    );
  const pages = componentInformation
    .map(
      (c) =>
        "- [" +
        c.name +
        "](https://ui.earthling.dev/components/" +
        c.path +
        "): " +
        c.description,
    )
    .join("\n");
  return new Response(
    guide + "\n\n## Component documentation\n\n" + pages + "\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
