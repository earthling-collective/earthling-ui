import { analyzeHierarchy } from "./analyze-hierarchy";

export async function init(type: string, options: { template?: string }) {
  const { template = "default" } = options;

  const { parentRepo } = await analyzeHierarchy();

  if (parentRepo != null)
    throw new Error(
      `Can not initialize a repo here. Parent repo "${parentRepo.name}" found. Try another location.`
    );

  //
}
