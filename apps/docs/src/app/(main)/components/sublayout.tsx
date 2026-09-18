import { notFound } from "next/navigation";
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";
import type { ReactElement } from "react";
import Link from "next/link";
import catalog from "earthling-ui/catalog.json";
import { ComponentSandbox } from "@/components/component-sandbox";
import { Code } from "@/components/code";
import { Toc } from "@/components/toc";
import { componentInformation } from "@/lib/component-info";
import { Tabs, TabList, Tab, TabPanel } from "earthling-ui/tabs";

export async function ComponentSublayout({
  path,
  anatomy,
  example,
}: {
  path: string;
  anatomy: string;
  example: ReactElement;
}) {
  const info = componentInformation.find((c) => c.path === path);
  const entry = catalog.components.find((c) => c.name === path);
  if (!info || !entry) return notFound();
  const root = resolve(process.cwd(), "../../packages/earthling-ui");
  const [source, types] = await Promise.all([
    readFile(resolve(root, entry.source), "utf8"),
    readFile(resolve(root, entry.types), "utf8"),
  ]);
  const names = new Set(
    [...anatomy.matchAll(/<([A-Z]\w*)/g)].map((match) => match[1]),
  );
  const imports = catalog.components
    .flatMap((component) => {
      const used = component.exports.filter((name) => names.has(name));
      return used.length
        ? [
            "import { " +
              used.join(", ") +
              ' } from "' +
              component.import +
              '";',
          ]
        : [];
    })
    .join("\n");
  const usage =
    imports +
    "\n\nexport function Example() { return (<>" +
    anatomy +
    "</>); }";
  return (
    <>
      <main
        id="main-content"
        className="min-w-0 px-5 py-10 sm:px-8 lg:px-10 lg:py-12"
      >
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <Link
              href="/#components"
              className="text-muted-foreground hover:text-foreground mb-5 inline-flex items-center gap-2 text-xs font-medium"
            >
              <i aria-hidden="true" className="icon-[lucide--grid-2x2]" />
              Components
            </Link>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {info.name}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7">
              {info.description}
            </p>
          </header>
          <section aria-label="Interactive example" className="mb-12">
            <ComponentSandbox
              path={path}
              propInfo={info.props}
              example={example}
            />
          </section>
          <section className="docs-section">
            <h2 id="usage">Usage</h2>
            <Code language="typescript" formatting="typescript">
              {usage}
            </Code>
            {!!info.notes?.length && (
              <ul className="text-muted-foreground marker:text-foreground mt-5 list-disc space-y-3 pl-5 text-sm leading-6">
                {info.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}
          </section>
          <section className="docs-section">
            <h2 id="installation">Installation</h2>
            <p className="text-muted-foreground mb-5 text-sm leading-6">
              Start with the{" "}
              <Link href="/getting-started" className="docs-link">
                project setup
              </Link>{" "}
              for React and Tailwind CSS 4. Both paths use the same component
              and theme.
            </p>
            <Tabs defaultSelectedKey="import" size="sm">
              <TabList aria-label="Installation method" className="mb-4 w-fit">
                <Tab id="import">Import package</Tab>
                <Tab id="eject">Own the source</Tab>
              </TabList>
              <TabPanel id="import">
                <Code language="bash">npm install earthling-ui</Code>
                <p className="text-muted-foreground mt-4 text-sm leading-6">
                  Use the component import shown above. Package updates keep the
                  implementation current.
                </p>
              </TabPanel>
              <TabPanel id="eject">
                <Code language="bash">
                  {"npx earthling-ui eject " +
                    path +
                    " --dry-run --json\nnpx earthling-ui eject " +
                    path}
                </Code>
                <p className="text-muted-foreground mt-4 text-sm leading-6">
                  The CLI copies the component and its shared helpers, rewrites
                  local imports, and installs dependencies. Import from your
                  configured component directory. Keep the library stylesheet
                  for theme tokens. See{" "}
                  <Link href="/cli" className="docs-link">
                    CLI options
                  </Link>
                  .
                </p>
              </TabPanel>
            </Tabs>
          </section>
          <section className="docs-section">
            <h2 id="api">API reference</h2>
            <p className="text-muted-foreground mb-5 text-sm leading-6">
              Declarations from the current library build, including inherited
              primitive props. Playground controls above show selected options;
              they are not the complete API.
            </p>
            <Code language="typescript" expandable>
              {types}
            </Code>
            {Object.keys(entry.dependencies).length > 0 && (
              <p className="text-muted-foreground mt-4 text-xs leading-6">
                Runtime dependencies:{" "}
                {Object.keys(entry.dependencies).join(", ")}.
              </p>
            )}
          </section>
          <section className="docs-section">
            <h2 id="source">Source</h2>
            <p className="text-muted-foreground mb-5 text-sm leading-6">
              Use the eject command to copy this implementation with its
              required helpers and project-specific imports.
            </p>
            <details className="group">
              <summary className="hover:bg-muted focus-visible:outline-outline cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium focus-visible:outline-2">
                View {info.name} implementation
              </summary>
              <div className="mt-3">
                <Code language="typescript" expandable>
                  {source}
                </Code>
              </div>
            </details>
          </section>
        </article>
      </main>
      <aside className="hidden xl:block">
        <Toc />
      </aside>
    </>
  );
}
