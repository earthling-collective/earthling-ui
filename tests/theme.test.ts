import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cn } from "../packages/earthling-ui/src/utils/cn";

const root = join(import.meta.dir, "../packages/earthling-ui/src");

function luminance(color: number[]) {
  const [L, chroma, hue] = color as [number, number, number];
  const a = chroma * Math.cos((hue * Math.PI) / 180);
  const b = chroma * Math.sin((hue * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((value) => Math.min(1, Math.max(0, value)));
  return rgb[0]! * 0.2126 + rgb[1]! * 0.7152 + rgb[2]! * 0.0722;
}

for (const file of ["index.css", "themes/dark.css"]) {
  test(`${file} foreground/background pairs meet normal-text contrast`, () => {
    const source = readFileSync(join(root, file), "utf8");
    const colors = Object.fromEntries(
      [...source.matchAll(/--color-([\w-]+): oklch\(([^)]+)\)/g)].map(
        ([, name, value]) => [
          name!,
          luminance(value!.split(/\s+/).map(Number)),
        ],
      ),
    );
    for (const scheme of [
      "primary",
      "secondary",
      "tertiary",
      "neutral",
      "muted",
      "good",
      "caution",
      "bad",
    ]) {
      const values = [colors[scheme]!, colors[`${scheme}-foreground`]!].sort(
        (a, b) => a - b,
      );
      expect((values[1]! + 0.05) / (values[0]! + 0.05)).toBeGreaterThanOrEqual(
        4.5,
      );
    }
    expect(
      (colors.foreground! + 0.05) / (colors.background! + 0.05) > 4.5 ||
        (colors.background! + 0.05) / (colors.foreground! + 0.05) > 4.5,
    ).toBe(true);
  });
}

test("custom token radius and caller utility overrides merge predictably", () => {
  expect(cn("rounded-(--radius-control)", "rounded-none")).toBe("rounded-none");
  expect(cn("bg-surface p-4", "bg-transparent p-0")).toBe("bg-transparent p-0");
});
