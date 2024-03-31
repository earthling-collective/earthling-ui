import { initPackageSpa } from "./init-package-spa";
import { initPackageSsr } from "./init-package-ssr";

export async function initPackage(
  name: string,
  options: { template?: string; ci?: boolean }
) {
  const { template = "default" } = options;

  switch (template.toLocaleLowerCase()) {
    case "default":
    case "ssr":
      return await initPackageSsr(name, options);
    case "spa":
      return await initPackageSpa(name, options);
  }

  throw new Error(
    `Template "${template}" not found. Try using "ssr" or "spa".`
  );
}
