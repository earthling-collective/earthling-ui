import { analyzeHierarchy } from "./analyze-hierarchy";

export async function initPackageSsr(name: string, options: { ci?: boolean }) {
  const { ci } = options;

  const {} = await analyzeHierarchy();

  //ensure the correct directory

  console.log(`✅ SSR package "${name}" initialized`);
}
