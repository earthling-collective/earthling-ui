import { Tabs, TabList, TabPanel, Tab } from "earthling-ui/tabs";

export default function (props: Record<string, any>) {
  return (
    <Tabs {...props}>
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="tab1" className={"py-4"}>
        <div>Tab 1 content</div>
      </TabPanel>
      <TabPanel id="tab2" className={"py-4"}>
        <div>Tab 2 content</div>
      </TabPanel>
      <TabPanel id="tab3" className={"py-4"}>
        <div>Tab 3 content</div>
      </TabPanel>
    </Tabs>
  );
}
