import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { ReactElement } from "react";
import type { ComponentPropInfo } from "@/lib/component-info";
import { Tabs, TabList, TabPanel, Tab } from "earthling-ui/tabs";
import { Code } from "@/components/code";
import { ComponentSandboxProvider } from "./context";
import { ComponentSandboxPreview } from "./preview";
import { ComponentSandboxControls } from "./controls";

export async function ComponentSandbox({
  path,
  propInfo,
  example,
}: {
  path: string;
  propInfo: ComponentPropInfo[];
  example: ReactElement;
}) {
  const source = await readFile(
    resolve(process.cwd(), "src/app/(main)/components", path, "example.tsx"),
    "utf8",
  );
  return (
    <ComponentSandboxProvider
      key={path}
      defaultProps={Object.fromEntries(
        propInfo.map((p) => [p.prop, p.defaultValue]),
      )}
    >
      <Tabs defaultSelectedKey="preview" size="sm">
        <TabList aria-label="Component example" className="mb-4 w-fit">
          <Tab id="preview">Preview</Tab>
          <Tab id="code">Example code</Tab>
        </TabList>
        <TabPanel id="preview">
          <ComponentSandboxPreview example={example} />
        </TabPanel>
        <TabPanel id="code">
          <Code language="typescript" expandable>
            {source}
          </Code>
          <p className="text-muted-foreground mt-3 text-xs">
            The complete example, including its imports and default state.
            Playground changes apply to the preview.
          </p>
        </TabPanel>
      </Tabs>
      <ComponentSandboxControls controls={propInfo} />
    </ComponentSandboxProvider>
  );
}
