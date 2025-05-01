"use client";
import "highlight.js/styles/night-owl.min.css";

import highlight from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import shell from "highlight.js/lib/languages/shell";
import bash from "highlight.js/lib/languages/bash";

highlight.registerLanguage("typescript", typescript);
highlight.registerLanguage("json", json);
highlight.registerLanguage("shell", shell);
highlight.registerLanguage("bash", bash);
highlight.registerLanguage("css", css);

export default highlight;
