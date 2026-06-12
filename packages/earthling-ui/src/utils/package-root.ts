import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Resolve the installed earthling-ui package root by walking up from this
 * module until a package.json named "earthling-ui" is found. Works whether
 * the CLI runs from src/ (bun, development) or from the bundled dist/cli.js.
 */
export function getPackageRoot(): string {
  let dir = path.dirname(fileURLToPath(import.meta.url));
  while (true) {
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
        if (pkg.name === "earthling-ui") return dir;
      } catch {
        // unreadable package.json — keep walking
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error("Could not locate the earthling-ui package root.");
    }
    dir = parent;
  }
}
