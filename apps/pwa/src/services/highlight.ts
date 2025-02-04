"use client";
import "highlight.js/styles/night-owl.min.css";

import highlight from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import shell from "highlight.js/lib/languages/shell";

highlight.registerLanguage("typescript", typescript);
highlight.registerLanguage("json", json);
highlight.registerLanguage("shell", shell);

export default highlight;
