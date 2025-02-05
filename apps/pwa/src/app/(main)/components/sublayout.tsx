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
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "earthling-ui/utils/cn";

export async function ComponentSublayout({
  path,
  anatomy,
}: {
  path: string;
  anatomy: string;
}) {
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

      <h3 className="mt-8 mb-4 border-b pb-1 text-lg font-medium">Structure</h3>
      <h4 className="my-4">Exports</h4>
      <Code
        language="typescript"
        formatting="typescript"
      >{`import { ${info.exports.join(", ")} } from "earthling-ui/${path}"`}</Code>
      <h4 className="my-4">Anatomy</h4>
      <Code language="typescript" formatting="typescript">
        {anatomy}
      </Code>

      <h3 className="mt-8 mb-4 border-b pb-1 text-lg font-medium">Usage</h3>
      <Tabs size="sm">
        <TabList className={"mb-4"}>
          <Tab id="import">Import</Tab>
          <Tab id="eject">Automatic Install (Eject)</Tab>
          <Tab id="manual">Manual Install</Tab>
        </TabList>
        <TabPanel id="eject">
          <Code language="shell">{`bun x earthling-ui eject ${path}`}</Code>
        </TabPanel>
        <TabPanel id="manual">
          <Steps>
            <Step step={1} title="Install dependencies">
              <Code
                language="shell"
                className="col-start-2"
              >{`bun add ${info.dependencies.filter((x) => x !== "react" && !x.startsWith("@/")).join(" ")}`}</Code>
            </Step>
            <Step step={2} title="Copy this source code into your project">
              <Code language="typescript">{sourceCode}</Code>
            </Step>
          </Steps>
        </TabPanel>
      </Tabs>
    </div>
  );
}

interface StepsProps extends ComponentPropsWithoutRef<"div"> {}
function Steps({ className, children, ...rest }: StepsProps) {
  return (
    <div
      className={cn("grid grid-cols-[fit-content(100%)_1fr] gap-4", className)}
    >
      {children}
    </div>
  );
}

interface StepProps extends ComponentPropsWithoutRef<"div"> {
  step: number;
  title: string;
}
function Step({ title, children, className, step, ...rest }: StepProps) {
  return (
    <div
      className={cn(
        "col-span-2 row-span-2 grid grid-cols-subgrid gap-[inherit]",
        className,
      )}
      {...rest}
    >
      <div className="row-span-2 flex flex-col items-center gap-2">
        <Badge scheme={"neutral"}>{step}</Badge>
        <Separator orientation="vertical" className="flex-1" />
      </div>
      <h5 className="font-medium">{title}</h5>
      <div>{children}</div>
    </div>
  );
}
