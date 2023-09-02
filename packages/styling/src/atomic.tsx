import CSS from "csstype";
import { createGenerator } from "@unocss/core";
import presetUno from "@unocss/preset-uno";

const uno = createGenerator({
  presets: [presetUno()],
});

export async function atomic(className: string): Promise<CSS.Properties> {
  const tokens = await uno.applyExtractors(className);

  const parsed = [];
  for (var token of tokens) {
    console.log(`parsing ${token}`);
    const p = await uno.parseToken(token);
    parsed.push(p);
  }

  console.log(parsed);
  return {};
}
