import { test, expect } from "bun:test";
import { join } from "node:path";
import { existsSync, rmdirSync, rmSync } from "node:fs";

// Define our templates with their expected destination type.
const templates = [
  { id: "ssr", type: "app" },
  { id: "monorepo", type: "repo" },
  { id: "spa", type: "app" },
  { id: "db", type: "package" },
  { id: "cli", type: "package" },
];

const cwd = process.cwd();

for (const template of templates) {
  test(`Create ${template.id} project`, () => {
    // Create a unique project name
    const projectName = `test-${template.id}-${Date.now()}`;

    // Determine the expected destination based on the template type.
    // For "repo", the destination is at the root.
    // For "app", it should be under "apps", and for "package", it should be under "packages".
    let expectedPath: string;
    if (template.type === "repo") {
      expectedPath = join(cwd, projectName);
    } else if (template.type === "app") {
      expectedPath = join(cwd, "apps", projectName);
    } else {
      expectedPath = join(cwd, "packages", projectName);
    }

    // Clean up any pre-existing folder just in case.
    if (existsSync(expectedPath)) {
      rmSync(expectedPath, { recursive: true, force: true });
    }

    // Run the command synchronously using Bun.spawnSync.
    const result = Bun.spawnSync({
      cmd: ["bun", "--bun", "earthling-ui", "create", template.id, projectName],
      // Ensures the command runs in the current working monorepo root.
      cwd,
    });

    if (result.exitCode !== 0) {
      throw new Error(
        `Command failed for template "${template.id}": ${result.stderr?.toString()}`
      );
    }

    // Assert that the expected folder now exists.
    expect(existsSync(expectedPath)).toBe(true);

    // Assert that there is a package.json inside the created folder.
    const packageJsonPath = join(expectedPath, "package.json");
    expect(existsSync(packageJsonPath)).toBe(true);

    // Clean up by removing the created folder completely.
    try {
      rmSync(expectedPath, { recursive: true, force: true });

      // Ensure the folder is removed.
      if (existsSync(expectedPath)) {
        // Fallback to rmdirSync if the folder still exists. (windows)
        rmdirSync(expectedPath, { recursive: true });
      }
    } catch (error) {
      console.error("Error cleaning up folder:", error);
    }
  });
}
