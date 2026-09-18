import { test, expect, afterAll } from "bun:test";
import {
  mkdtempSync,
  cpSync,
  readdirSync,
  rmSync,
  existsSync,
  readFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const repoRoot = join(import.meta.dir, "..");
const pkgDir = join(repoRoot, "packages", "earthling-ui");
const fixtureSrc = join(import.meta.dir, "fixtures", "vite-consumer");

const workDir = mkdtempSync(join(tmpdir(), "earthling-vite-"));

afterAll(() => {
  rmSync(workDir, { recursive: true, force: true });
});

test(
  "a Vite app builds against the packed tarball",
  () => {
    // Pack the library exactly as it would be published (exercises files[])
    const pack = Bun.spawnSync(["npm", "pack", "--pack-destination", workDir], {
      cwd: pkgDir,
    });
    expect(pack.exitCode).toBe(0);
    const tarball = readdirSync(workDir).find((f) => f.endsWith(".tgz"));
    expect(tarball).toBeDefined();

    // Set up the consumer app from the fixture
    const appDir = join(workDir, "app");
    cpSync(fixtureSrc, appDir, { recursive: true });

    const install = Bun.spawnSync(
      ["npm", "install", "--no-audit", "--no-fund", join(workDir, tarball!)],
      { cwd: appDir },
    );
    expect(install.exitCode).toBe(0);

    const discovery = Bun.spawnSync(
      ["node", "node_modules/earthling-ui/dist/cli.js", "list", "--json"],
      { cwd: appDir },
    );
    expect(discovery.exitCode).toBe(0);
    expect(JSON.parse(discovery.stdout.toString())).toContain("slider");
    const catalog = JSON.parse(
      readFileSync(
        join(appDir, "node_modules/earthling-ui/dist/catalog.json"),
        "utf8",
      ),
    );
    expect(
      catalog.components.some(
        (component: { name: string }) => component.name === "button",
      ),
    ).toBe(true);
    expect(existsSync(join(appDir, "node_modules/earthling-ui/llms.txt"))).toBe(
      true,
    );

    // Build the app
    const build = Bun.spawnSync(["npm", "run", "build"], { cwd: appDir });
    const output = build.stdout.toString() + build.stderr.toString();

    // The build must succeed. Rollup may warn that module-level directives
    // ("use client") are ignored when bundling — that is expected and
    // harmless for a client-only Vite app — but it must not be an error.
    if (build.exitCode !== 0) throw new Error(output);

    // CSS subpath exports resolved and produced an emitted stylesheet
    const assets = readdirSync(join(appDir, "dist", "assets"));
    expect(assets.some((f) => f.endsWith(".css"))).toBe(true);
    expect(assets.some((f) => f.endsWith(".js"))).toBe(true);
    const css = assets
      .filter((file) => file.endsWith(".css"))
      .map((file) => readFileSync(join(appDir, "dist/assets", file), "utf8"))
      .join("\n");
    expect(css).not.toContain("@theme");
    expect(css).not.toContain("@source");
    expect(css).toContain("--radius-control");
    expect(css).toContain("prefers-reduced-motion");
    expect(css).toContain("lucide");
    expect(existsSync(join(appDir, "dist", "index.html"))).toBe(true);

    if (process.env.EARTHLING_PREVIEW)
      cpSync(join(appDir, "dist"), join(fixtureSrc, "dist"), {
        recursive: true,
      });

    // Record the observed directive behavior so regressions surface loudly:
    // a failed module resolution or a hard error would have failed above.
    if (output.includes("use client")) {
      console.info(
        "[vite-consumer] Vite reported 'use client' directive notices (expected, non-fatal).",
      );
    }
  },
  { timeout: 600_000 },
);
