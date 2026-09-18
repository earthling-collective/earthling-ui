import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("tabs");

export default async function Page() {
  return (
    <ComponentSublayout
      path="tabs"
      anatomy={
        '<Tabs defaultSelectedKey="overview">\n  <TabList aria-label="Project details">\n    <Tab id="overview">Overview</Tab>\n    <Tab id="activity">Activity</Tab>\n  </TabList>\n  <TabPanel id="overview">Project overview</TabPanel>\n  <TabPanel id="activity">Recent activity</TabPanel>\n</Tabs>'
      }
      example={<Example />}
    />
  );
}
