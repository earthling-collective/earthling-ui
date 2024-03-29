import { analyzeHierarchy } from "./analyze-hierarchy";

export async function initRepo(name: string, options: { template?: string }) {
  const { template = "default" } = options;

  const { parentPackage } = await analyzeHierarchy();

  if (parentPackage != null)
    throw new Error(
      `Can not initialize a repo here. Parent repo "${parentPackage.name}" found. Try another location.`
    );

  //
  console.log(
    `✅ repo "${name}" initialized${
      template !== "default" ? ` using template "${template}"` : ``
    }`
  );
}
