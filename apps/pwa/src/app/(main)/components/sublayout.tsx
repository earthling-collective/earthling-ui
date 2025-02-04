import { notFound } from "next/navigation";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { Breadcrumb, Breadcrumbs } from "earthling-ui/breadcrumbs";
import Link from "next/link";
import { ComponentSandbox } from "@/components/component-sandbox";
import { Code } from "@/components/code";
import { Tab, TabList, TabPanel, Tabs } from "earthling-ui/tabs";

export async function ComponentSublayout({ path }: { path: string }) {
  try {
    const filePath = resolve(
      process.cwd(),
      `../../packages/earthling-ui/src/components/${path}/index.tsx`,
    );
    var sourceCode = await readFile(filePath, "utf-8");
  } catch (e) {
    console.error(e);
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl py-4 md:my-4 md:p-0">
      <Breadcrumbs className="mb-8 text-sm">
        <Breadcrumb className={"text-muted-foreground"}>
          <Link href={`/#components`} className="hover:underline">
            Components
          </Link>
        </Breadcrumb>
        <Breadcrumb className={"capitalize"}>
          <Link href={`/components/${path}`} className="hover:underline">
            {path}
          </Link>
        </Breadcrumb>
      </Breadcrumbs>

      <h3 className="border-b">Usage</h3>
      <h4>Import</h4>
      <Code language="typescript">{`import {} from "earthling-ui/${path}"`}</Code>
      <h4>Anatomy</h4>
      <h4>Sandbox</h4>
      <ComponentSandbox path={path} />

      <h3 className="border-b">Customization</h3>
      <h4>Eject</h4>
      <Tabs size="sm">
        <TabList>
          <Tab id="auto">Auto</Tab>
          <Tab id="manual">Manual</Tab>
        </TabList>
        <TabPanel id="auto">
          <Code language="shell">{`bun x earthling-ui eject ${path}`}</Code>
        </TabPanel>
        <TabPanel id="manual">
          <h5>Dependencies</h5>
          <Code language="shell">
            bun add class-variance-authority @radix-ui/react-accordion
          </Code>
          <h5>Source Code</h5>
          <Code language="typescript">{sourceCode}</Code>
        </TabPanel>
      </Tabs>
    </div>
  );
}
