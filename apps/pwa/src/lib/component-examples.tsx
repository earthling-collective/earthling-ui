import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "earthling-ui/accordion";
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import { Badge } from "earthling-ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "earthling-ui/select";
import { Surface } from "earthling-ui/surface";
import { Switch } from "earthling-ui/switch";
import { TextArea } from "earthling-ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { cn } from "earthling-ui/utils/cn";
import { Tabs, TabList, TabPanel, Tab } from "earthling-ui/tabs";
import { Breadcrumb, Breadcrumbs } from "earthling-ui/breadcrumbs";
import { Popover, PopoverContent, PopoverTrigger } from "earthling-ui/popover";
import { Drawer, DrawerContent, DrawerTrigger } from "earthling-ui/drawer";

export const componentExamples = {
  accordion: (props) => (
    <Accordion {...props} className={cn("w-full max-w-md", props.className)}>
      <AccordionItem id="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  badge: (props) => <Badge {...props}>Badge</Badge>,
  breadcrumbs: (props) => (
    <Breadcrumbs {...props}>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Library</Breadcrumb>
      <Breadcrumb>Data</Breadcrumb>
    </Breadcrumbs>
  ),
  button: (props) => (
    <Button {...props}>
      <i className="icon-[lucide--house]" />
      {props.shape !== "icon" && `Click me`}
    </Button>
  ),
  drawer: (props) => (
    <Drawer {...props}>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-50 w-50" />
      </DrawerContent>
    </Drawer>
  ),
  input: (props) => <Input placeholder="Type something..." {...props} />,
  textarea: (props) => (
    <TextArea
      placeholder="Type something..."
      {...props}
      className={cn("max-w-md", props.className)}
    />
  ),
  popover: (props) => (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>Lorem ipsum dolor sit amet</PopoverContent>
    </Popover>
  ),
  select: (props) => (
    <Select {...props}>
      <SelectTrigger className={cn("max-w-md", props.className)}>
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  ),
  surface: (props) => (
    <Surface {...props} className="max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
      nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet ullamcorper
      velit nisl in velit.
    </Surface>
  ),
  tabs: (props) => (
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
  ),
  ["toggle-group"]: (props) => (
    <ToggleGroup {...props} type="single" defaultValue="system">
      <ToggleGroupItem value="system">
        <i className="icon-[lucide--computer]" />
        <div>System</div>
      </ToggleGroupItem>
      <ToggleGroupItem value="light">
        <i className="icon-[lucide--sun]" />
        <div>Light</div>
      </ToggleGroupItem>
      <ToggleGroupItem value="dark">
        <i className="icon-[lucide--moon]" />
        <div>Dark</div>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  switch: (props) => <Switch {...props} />,
} as Record<string, (props: Record<string, any>) => React.ReactNode>;
