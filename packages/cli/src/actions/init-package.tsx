import { analyzeHierarchy } from "./analyze-hierarchy";

export async function initPackage(
  name: string,
  options: { template?: string }
) {
  const { template = "default" } = options;

  const {} = await analyzeHierarchy();

  console.log(
    `✅ package "${name}" initialized${
      template !== "default" ? ` using template "${template}"` : ``
    }`
  );
}
