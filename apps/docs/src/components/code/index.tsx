import highlight from "@/services/highlight";
import { format, type BuiltInParserName } from "prettier";
import { CodeFrame } from "./frame";

export async function Code({
  children = "",
  language,
  formatting,
  expandable,
  className,
}: {
  children?: string;
  language: string;
  formatting?: BuiltInParserName;
  expandable?: boolean;
  className?: string;
}) {
  const source = formatting
    ? await format(children, { parser: formatting })
    : children.trimEnd();
  const html = highlight.highlight(source, {
    language: highlight.getLanguage(language) ? language : "plaintext",
  }).value;
  return (
    <CodeFrame
      source={source}
      language={language}
      expandable={expandable}
      className={className}
    >
      <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
    </CodeFrame>
  );
}
