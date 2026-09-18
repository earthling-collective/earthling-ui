"use client";

import type { ComponentProps } from "react";
import { Tab, TabList, TabPanel, Tabs } from "earthling-ui/tabs";

export default function Example({
  defaultSelectedKey = "overview",
  ...props
}: ComponentProps<typeof Tabs>) {
  return (
    <Tabs defaultSelectedKey={defaultSelectedKey} {...props}>
      <TabList aria-label="Project details">
        <Tab id="overview">Overview</Tab>
        <Tab id="activity">Activity</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
      <TabPanel id="overview" className="text-muted-foreground pt-4 text-sm">
        Track the milestones, owners, and next steps for this project.
      </TabPanel>
      <TabPanel id="activity" className="text-muted-foreground pt-4 text-sm">
        No new activity since your last visit.
      </TabPanel>
      <TabPanel id="settings" className="text-muted-foreground pt-4 text-sm">
        Manage project visibility and notification preferences.
      </TabPanel>
    </Tabs>
  );
}
