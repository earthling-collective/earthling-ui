import { test, expect, afterAll, setDefaultTimeout } from "bun:test";
import {
  mkdtempSync,
  writeFileSync,
  readFileSync,
  existsSync,
  rmSync,
  mkdirSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

setDefaultTimeout(30_000);

const pkgDir = join(import.meta.dir, "..", "packages", "earthling-ui");
const cli = join(pkgDir, "dist", "cli.js");
const fixtureDir = mkdtempSync(join(tmpdir(), "earthling-eject-"));
afterAll(() => rmSync(fixtureDir, { recursive: true, force: true }));

function fixture(
  name: string,
  config = { componentDir: "src/components", utilsDir: "src/utils" },
) {
  const dir = join(fixtureDir, name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "package.json"),
    JSON.stringify({ name: "eject-fixture", version: "0.0.0" }),
  );
  writeFileSync(join(dir, "earthling-ui.config.json"), JSON.stringify(config));
  return dir;
}
function run(cwd: string, ...args: string[]) {
  const result = Bun.spawnSync(["node", cli, ...args], { cwd });
  return {
    code: result.exitCode,
    out: result.stdout.toString(),
    error: result.stderr.toString(),
  };
}

test("list and info are parseable and pinned to installed source", () => {
  const list = run(fixtureDir, "list", "--json");
  expect(list.code).toBe(0);
  expect(JSON.parse(list.out)).toContain("button");
  const info = run(fixtureDir, "info", "button", "--source", "--json");
  expect(info.code).toBe(0);
  expect(
    JSON.parse(info.out).content["src/components/button/index.tsx"],
  ).toContain("Button");
});

test("dry-run resolves nested config without creating files", () => {
  const dir = fixture("dry-run");
  const nested = join(dir, "nested");
  mkdirSync(nested);
  const result = run(nested, "eject", "button", "--dry-run", "--json");
  expect(result.code).toBe(0);
  expect(JSON.parse(result.out).files.length).toBeGreaterThan(1);
  expect(existsSync(join(dir, "src"))).toBe(false);
});

test("eject copies helpers and rewrites imports with no install", () => {
  const dir = fixture("copy", {
    componentDir: "components",
    utilsDir: "lib/helpers",
  });
  const result = run(dir, "eject", "button", "--no-install", "--json");
  expect(result.code).toBe(0);
  const plan = JSON.parse(result.out);
  for (const file of plan.files) expect(existsSync(file.target)).toBe(true);
  const source = readFileSync(join(dir, "components/button/index.tsx"), "utf8");
  expect(source).toContain("../../lib/helpers/cn");
  expect(source).not.toContain("@/utils/");
  expect(plan.dependencies).toHaveProperty("cnfast");
  expect(existsSync(join(dir, "node_modules"))).toBe(false);

  const target = join(dir, "components/button/index.tsx");
  writeFileSync(target, "// custom button");
  const helper = join(dir, "lib/helpers/cn.ts");
  writeFileSync(helper, "// custom helper");
  const collision = run(dir, "eject", "button", "--no-install", "--json");
  expect(collision.code).toBe(1);
  expect(JSON.parse(collision.error).error).toContain("--overwrite");
  expect(readFileSync(target, "utf8")).toBe("// custom button");
  expect(
    run(dir, "eject", "button", "--no-install", "--overwrite", "--json").code,
  ).toBe(0);
  expect(readFileSync(helper, "utf8")).toBe("// custom helper");
});

test("eject rejects unknown components and out-of-project destinations", () => {
  const dir = fixture("bad-path", {
    componentDir: "../outside",
    utilsDir: "src/utils",
  });
  expect(run(dir, "eject", "../utils", "--no-install", "--json").code).toBe(1);
  const result = run(dir, "eject", "button", "--no-install", "--json");
  expect(result.code).toBe(1);
  expect(JSON.parse(result.error).error).toContain("inside the project");
  expect(existsSync(join(fixtureDir, "outside"))).toBe(false);
});

test(
  "eject installs source dependencies under Node",
  () => {
    const dir = fixture("install");
    const result = run(dir, "eject", "button");
    expect(result.code).toBe(0);
    const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
    expect(pkg.dependencies).toHaveProperty("class-variance-authority");
    expect(pkg.dependencies).toHaveProperty("@radix-ui/react-slot");
    expect(pkg.dependencies).toHaveProperty("cnfast");
    expect(result.out).toContain("ejected successfully");
  },
  { timeout: 180_000 },
);
