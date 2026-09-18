import "server-only";

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

import plaintext from "highlight.js/lib/languages/plaintext";
import xml from "highlight.js/lib/languages/xml";
highlight.registerLanguage("plaintext", plaintext);
highlight.registerLanguage("xml", xml);
