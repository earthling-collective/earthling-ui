import { describe, expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  inspectComponent,
  listComponents,
} from "../packages/earthling-ui/src/utils/catalog";

describe("source catalog", () => {
  test("every component resolves its public exports and versioned source dependencies", () => {
    const names = listComponents();
    expect(names.length).toBeGreaterThan(30);
    for (const name of names) {
      const component = inspectComponent(name);
      expect(component.exports.length).toBeGreaterThan(0);
      expect(component.files).toContain(component.source);
      expect(component.import).toBe(`earthling-ui/${name}`);
      expect(
        Object.values(component.dependencies).every(
          (version) => typeof version === "string" && version.length > 0,
        ),
      ).toBe(true);
    }
    expect(inspectComponent("button").dependencies).toHaveProperty("cnfast");
  });

  test("unknown and traversal names fail before reading source", () => {
    for (const name of ["missing", "../utils", "button/..", "."]) {
      expect(() => inspectComponent(name)).toThrow("Unknown component");
    }
  });

  test("discovers sibling and nested helper dependencies once, including cycles", () => {
    const root = mkdtempSync(join(tmpdir(), "earthling-catalog-"));
    try {
      for (const directory of [
        "src/components/first",
        "src/components/second",
        "src/utils",
      ])
        mkdirSync(join(root, directory), { recursive: true });
      writeFileSync(
        join(root, "package.json"),
        JSON.stringify({ dependencies: { cnfast: "^0.0.8" } }),
      );
      writeFileSync(
        join(root, "src/components/first/index.tsx"),
        'import { Second } from "../second"; export const First = Second;',
      );
      writeFileSync(
        join(root, "src/components/second/index.tsx"),
        'import { First } from "../first"; import { cn } from "@/utils/cn"; export { First as Second };',
      );
      writeFileSync(
        join(root, "src/utils/cn.ts"),
        'export { cn } from "cnfast";',
      );
      const component = inspectComponent("first", root);
      expect(component.files).toEqual([
        "src/components/first/index.tsx",
        "src/components/second/index.tsx",
        "src/utils/cn.ts",
      ]);
      expect(component.dependencies).toEqual({ cnfast: "^0.0.8" });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
