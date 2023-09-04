import CSS from "csstype";
import { createGenerator } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import { parse } from "css";

function cssStringToJSS(cssString: string): CSS.Properties {
  const ast = parse(cssString);
  console.log("ast", ast);

  return {};
}

const uno = createGenerator({
  presets: [presetUno()],
});

export async function atomic(className: string): Promise<CSS.Properties> {
  const tokens = await uno.applyExtractors(className);

  const parsed = [];
  for (var token of tokens) {
    console.log(`parsing ${token}`);
    const p = (await uno.parseToken(token))?.[0];
    console.log("got", p);
    if (!p?.[2]) continue;
    console.log("obj", cssStringToJSS(p[2]));
    parsed.push(p[2]);
  }

  console.log(parsed);
  return {};
}
