import { initPackage } from "./init-package";
import { initRepo } from "./init-repo";

export async function init(
  name: string,
  options: { repo?: boolean; template?: string; ci?: boolean }
) {
  const { repo } = options;

  if (repo) {
    await initRepo(name, options);
  } else {
    await initPackage(name, options);
  }
}
