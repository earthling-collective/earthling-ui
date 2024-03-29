import { initPackage } from "./init-package";
import { initRepo } from "./init-repo";

export async function init(
  name: string,
  options: { mode?: "repo" | "package"; template?: string }
) {
  const { mode = "package" } = options;

  switch (mode) {
    case "package":
      initPackage(name, options);
      break;

    case "repo":
      initRepo(name, options);
      break;
  }
}
