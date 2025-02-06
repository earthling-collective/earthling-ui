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
import { Button } from "earthling-ui/button";
import { useScrollSpy } from "@/utils/use-scroll-spy";
import { Subnav } from "./subnav";

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
    <>
      <main className="col-span-3 flex flex-1 flex-col px-4 xl:col-span-1">
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

          <h2 className="text-3xl font-bold">{info.name}</h2>

          <section id="sandbox" className="scroll-mt-[111px]">
            <ComponentSandbox path={path} propInfo={info.props} />
          </section>

          <section id="anatomy" className="scroll-mt-[81px]">
            <h3 className="mt-8 mb-4 border-b pb-1 text-xl font-medium">
              Anatomy
            </h3>
            <Code language="typescript" formatting="typescript">
              {anatomy}
            </Code>
          </section>

          <section id="installation" className="scroll-mt-[81px]">
            <h3 className="mt-8 mb-4 border-b pb-1 text-xl font-medium">
              Installation
            </h3>
            <Tabs>
              <TabList className={"mb-8"}>
                <Tab id="import">Import</Tab>
                <Tab id="eject">Automatic Install (Eject)</Tab>
                <Tab id="manual">Manual Install</Tab>
              </TabList>
              <TabPanel id="import">
                <Steps>
                  <Step step={1} title="Ensure Earthling UI is installed">
                    <Code language="shell">{`bun add earthling-ui`}</Code>
                  </Step>
                  <Step step={2} title="Import the component from earthling-ui">
                    <Code
                      language="typescript"
                      formatting={"typescript"}
                    >{`import { ${info.exports.join(", ")} } from "earthling-ui/${path}"`}</Code>
                  </Step>
                  <CompletionStep
                    step={3}
                    title="The component is ready to use"
                  />
                </Steps>
              </TabPanel>
              <TabPanel id="eject">
                <Steps>
                  <Step step={1} title="Eject the component into your project">
                    <Code language="shell">{`bun x earthling-ui eject ${path}`}</Code>
                    <div className="mt-4">
                      The CLI will automatically copy the component into your
                      project and install the necessary dependencies.
                    </div>
                  </Step>
                  <Step
                    step={2}
                    title="Import the component from the install location"
                  >
                    <Code
                      language="typescript"
                      formatting={"typescript"}
                    >{`import { ${info.exports.join(", ")} } from "@/components/${path}"`}</Code>
                  </Step>
                  <CompletionStep
                    step={3}
                    title="The component is ready to use"
                  />
                </Steps>
              </TabPanel>
              <TabPanel id="manual">
                <Steps>
                  <Step step={1} title="Install dependencies">
                    <Code
                      language="shell"
                      className="col-start-2"
                    >{`bun add ${info.dependencies.filter((x) => x !== "react" && !x.startsWith("@/")).join(" ")}`}</Code>
                  </Step>
                  <Step
                    step={2}
                    title="Copy this source code into your project"
                  >
                    <Code language="typescript" expandable>
                      {sourceCode}
                    </Code>
                  </Step>
                  <Step
                    step={3}
                    title="Import the component from the install location"
                  >
                    <Code
                      language="typescript"
                      formatting={"typescript"}
                    >{`import { ${info.exports.join(", ")} } from "@/components/${path}"`}</Code>
                  </Step>
                  <CompletionStep
                    step={3}
                    title="The component is ready to use"
                  />
                </Steps>
              </TabPanel>
            </Tabs>
          </section>
        </div>
      </main>
      <aside className="hidden w-[280px] flex-col border-l border-transparent xl:flex">
        <Subnav />
      </aside>
    </>
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
        <Badge scheme={"neutral"} className="aspect-square">
          {step}
        </Badge>
        <Separator orientation="vertical" className="flex-1" />
      </div>
      <h5 className="font-medium">{title}</h5>
      <div className="pb-4">{children}</div>
    </div>
  );
}

function CompletionStep({
  title,
  children,
  className,
  step,
  ...rest
}: StepProps) {
  return (
    <div
      className={cn(
        "col-span-2 row-span-1 grid grid-cols-subgrid items-center gap-[inherit]",
        className,
      )}
      {...rest}
    >
      <div className="flex flex-col items-center gap-2">
        <Badge scheme={"primary"} className="aspect-square">
          <i className="icon-[lucide--check]" />
        </Badge>
        <Separator orientation="vertical" className="flex-1" />
      </div>
      <h5 className="font-medium">{title}</h5>
    </div>
  );
}
