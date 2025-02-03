"use client";

import { Code } from "@/components/code";
import { Stage } from "@/components/stage";
import { componentExamples } from "@/lib/component-examples";
import { componentInformation } from "@/lib/component-info";
import { Surface } from "earthling-ui/surface";
import { Tabs, TabList, TabPanel, Tab } from "earthling-ui/tabs";
import { notFound } from "next/navigation";
import { useMemo, lazy } from "react";

export default function ({ path, code }: { path: string; code: string }) {
  const info = useMemo(
    () => componentInformation.find((c) => c.path === path),
    [path],
  );

  if (!info) return notFound();

  return (
    <>
      <Tabs defaultSelectedKey="props" size="sm">
        <TabList className="mx-4">
          <Tab id="props">Props</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanel id="props">
          <Stage controls={info?.props || []}>
            {componentExamples[info.path]}
          </Stage>
        </TabPanel>
        <TabPanel id="code">
          <Code language="typescript">{code}</Code>
        </TabPanel>
      </Tabs>
    </>
  );
}
