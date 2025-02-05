import { notFound } from "next/navigation";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { Breadcrumb, Breadcrumbs } from "earthling-ui/breadcrumbs";
import Link from "next/link";
import { ComponentSandbox } from "@/components/component-sandbox";
import { Code } from "@/components/code";
import { Tab, TabList, TabPanel, Tabs } from "earthling-ui/tabs";
import { componentInformation } from "@/lib/component-info";
import { Badge } from "earthling-ui/badge";
import { Separator } from "earthling-ui/separator";

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

  const info = componentInformation.find((c) => c.path === path);
  if (!info) return notFound();

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

      <h2 className="text-2xl font-bold">{info.name}</h2>

      <ComponentSandbox path={path} propInfo={info.props} />

      <h3 className="mt-8 mb-4 border-b pb-1 text-lg font-medium">Usage</h3>
      {/* <h4>Import</h4> */}
      <Code
        language="typescript"
        formatting="typescript"
        className="my-8"
      >{`import { ${info.exports.join(", ")} } from "earthling-ui/${path}"`}</Code>
      {/* <h4>Anatomy</h4> */}
      {/* <h4>Examples</h4> */}

      <h3 className="mt-8 mb-4 border-b pb-1 text-lg font-medium">
        Forking the component
      </h3>
      <Tabs size="sm">
        <TabList className={"mb-4"}>
          <Tab id="cli">CLI</Tab>
          <Tab id="manual">Manual</Tab>
        </TabList>
        <TabPanel id="cli">
          <Code language="shell">{`bun x earthling-ui eject ${path}`}</Code>
        </TabPanel>
        <TabPanel id="manual">
          <div className="grid grid-cols-[fit-content(100%)_1fr] gap-4">
            <div className="row-span-2 flex flex-col items-center gap-2">
              <Badge scheme={"neutral"}>1</Badge>
              <Separator orientation="vertical" className="flex-1" />
            </div>
            <h5 className="font-medium">Install dependencies</h5>
            <Code
              language="shell"
              className="col-start-2"
            >{`bun add ${info.dependencies.filter((x) => x !== "react" && !x.startsWith("@/")).join(" ")}`}</Code>

            <div className="row-span-2 flex flex-col items-center gap-2">
              <Badge scheme={"neutral"}>2</Badge>
              <Separator orientation="vertical" className="flex-1" />
            </div>
            <h5 className="font-medium">
              Copy this source code into your project
            </h5>
            <Code language="typescript">{sourceCode}</Code>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
