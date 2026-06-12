import { test, expect, describe } from "bun:test";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// These tests assert against a fresh build:
//   bun run --cwd packages/earthling-ui build
const pkgDir = join(import.meta.dir, "..", "packages", "earthling-ui");
const distComponents = join(pkgDir, "dist", "components");
const distCjs = join(pkgDir, "dist", "cjs");
const srcComponents = join(pkgDir, "src", "components");

const componentNames = readdirSync(srcComponents, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

describe("dist ESM output", () => {
  test("every component has an ESM entry that starts with 'use client'", () => {
    for (const name of componentNames) {
      const entry = join(distComponents, name, "index.js");
      expect(existsSync(entry)).toBe(true);
      const source = readFileSync(entry, "utf8");
      expect(source.startsWith('"use client";')).toBe(true);
    }
  });

  test("shared chunks start with 'use client'", () => {
    const chunks = readdirSync(distComponents).filter(
      (f) => f.startsWith("chunk-") && f.endsWith(".js"),
    );
    expect(chunks.length).toBeGreaterThan(0);
    for (const chunk of chunks) {
      const source = readFileSync(join(distComponents, chunk), "utf8");
      expect(source.startsWith('"use client";')).toBe(true);
    }
  });

  test("barrel entry exists and starts with 'use client'", () => {
    const source = readFileSync(join(distComponents, "index.js"), "utf8");
    expect(source.startsWith('"use client";')).toBe(true);
  });

  test("every component has type declarations", () => {
    for (const name of componentNames) {
      expect(existsSync(join(distComponents, name, "index.d.ts"))).toBe(true);
    }
    expect(existsSync(join(distComponents, "index.d.ts"))).toBe(true);
  });
});

describe("dist CJS output", () => {
  test("dist/cjs is marked as commonjs", () => {
    const marker = JSON.parse(
      readFileSync(join(distCjs, "package.json"), "utf8"),
    );
    expect(marker.type).toBe("commonjs");
  });

  test("every component has a CJS entry without a 'use client' banner", () => {
    for (const name of componentNames) {
      const entry = join(distCjs, "components", name, "index.js");
      expect(existsSync(entry)).toBe(true);
      const source = readFileSync(entry, "utf8");
      expect(source.startsWith('"use client";')).toBe(false);
    }
  });

  test("CJS entries are loadable by node require()", () => {
    const result = Bun.spawnSync(
      [
        "node",
        "-e",
        `const m = require(${JSON.stringify(
          join(distCjs, "components", "button", "index.js"),
        )}); if (typeof m.Button !== "object" && typeof m.Button !== "function") process.exit(1);`,
      ],
      { cwd: pkgDir },
    );
    expect(result.exitCode).toBe(0);
  });
});

describe("CLI output", () => {
  test("dist/cli.js exists and starts with a node shebang", () => {
    const cli = join(pkgDir, "dist", "cli.js");
    expect(existsSync(cli)).toBe(true);
    const source = readFileSync(cli, "utf8");
    expect(source.startsWith("#!/usr/bin/env node")).toBe(true);
  });
});

describe("source regressions", () => {
  test("no semicolons inside [--scheme-...] arbitrary properties", () => {
    for (const name of componentNames) {
      const source = readFileSync(
        join(srcComponents, name, "index.tsx"),
        "utf8",
      );
      expect(source).not.toMatch(/\[--scheme-[^\]]*;/);
    }
  });

  test("every component source declares 'use client'", () => {
    for (const name of componentNames) {
      const source = readFileSync(
        join(srcComponents, name, "index.tsx"),
        "utf8",
      );
      expect(source.startsWith('"use client";')).toBe(true);
    }
  });

  test("components only import utils from @/utils (eject-safe)", () => {
    for (const name of componentNames) {
      const source = readFileSync(
        join(srcComponents, name, "index.tsx"),
        "utf8",
      );
      // Cross-component imports would break the eject command, which only
      // copies a single component folder and rewrites @/utils/* imports.
      expect(source).not.toMatch(/from\s+["']@\/components\//);
    }
  });
});
