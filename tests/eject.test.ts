import { test, expect, afterAll } from "bun:test";
import {
  mkdtempSync,
  writeFileSync,
  readFileSync,
  existsSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const pkgDir = join(import.meta.dir, "..", "packages", "earthling-ui");
const cli = join(pkgDir, "dist", "cli.js");

const fixtureDir = mkdtempSync(join(tmpdir(), "earthling-eject-"));

afterAll(() => {
  rmSync(fixtureDir, { recursive: true, force: true });
});

test(
  "eject copies a component into a project under node",
  () => {
    writeFileSync(
      join(fixtureDir, "package.json"),
      JSON.stringify({ name: "eject-fixture", version: "0.0.0" }, null, 2),
    );
    writeFileSync(
      join(fixtureDir, "earthling-ui.config.json"),
      JSON.stringify(
        { componentDir: "src/components", utilsDir: "src/utils" },
        null,
        2,
      ),
    );

    const result = Bun.spawnSync(["node", cli, "eject", "button"], {
      cwd: fixtureDir,
    });
    const output =
      result.stdout.toString() + result.stderr.toString();

    expect(result.exitCode).toBe(0);

    // Component and shared utility were copied
    const componentPath = join(fixtureDir, "src", "components", "button", "index.tsx");
    const cnPath = join(fixtureDir, "src", "utils", "cn.ts");
    expect(existsSync(componentPath)).toBe(true);
    expect(existsSync(cnPath)).toBe(true);

    // @/utils imports were rewritten to relative paths
    const componentSource = readFileSync(componentPath, "utf8");
    expect(componentSource).not.toContain('from "@/utils/');
    expect(componentSource).toContain('from "../../utils/cn"');

    // Dependencies were detected and installed
    const pkg = JSON.parse(
      readFileSync(join(fixtureDir, "package.json"), "utf8"),
    );
    const deps = Object.keys(pkg.dependencies ?? {});
    expect(deps).toContain("class-variance-authority");
    expect(deps).toContain("@radix-ui/react-slot");
    expect(deps).toContain("clsx");
    expect(deps).toContain("tailwind-merge");

    expect(output).toContain("ejected successfully");
  },
  { timeout: 180_000 },
);
