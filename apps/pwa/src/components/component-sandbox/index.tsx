import { componentInformation } from "@/lib/component-info";
import { Tabs, TabList, TabPanel, Tab } from "earthling-ui/tabs";
import { notFound } from "next/navigation";
import { ComponentSandboxProvider } from "./context";
import { ComponentSandboxPreview } from "./preview";
import { ComponentSandboxCode } from "./code";
import { ComponentSandboxControls } from "./controls";
import { resolve } from "path";
import { readFile } from "fs/promises";

function captureComponentChildren(code: string): string | null {
  const regex = /return\s*\(?\s*([\s\S]*?)\s*\)?;(?=\s*})/;
  const match = code.match(regex);
  return match ? match[1].trim() : null;
}

export async function ComponentSandbox({ path }: { path: string }) {
  const info = componentInformation.find((c) => c.path === path);
  if (!info) return notFound();

  try {
    const filePath = resolve(
      process.cwd(),
      `./src/app/(main)/components/${path}/example.tsx`,
    );
    var exampleCode = captureComponentChildren(
      await readFile(filePath, "utf-8"),
    );
  } catch (e) {
    console.error(e);
    return notFound();
  }

  return (
    <ComponentSandboxProvider
      defaultProps={Object.fromEntries(
        info.props.map((x) => [x.prop, x.defaultValue]),
      )}
    >
      <Tabs defaultSelectedKey="props" size="sm">
        <TabList className="mx-4 justify-end">
          <Tab id="props">Preview</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanel id="props">
          <ComponentSandboxPreview path={path} />
        </TabPanel>
        <TabPanel id="code">
          <ComponentSandboxCode>
            {exampleCode || undefined}
          </ComponentSandboxCode>
        </TabPanel>
      </Tabs>
      <div className="my-4 flex flex-col gap-4">
        <ComponentSandboxControls controls={info?.props || []} />
      </div>
    </ComponentSandboxProvider>
  );
}
