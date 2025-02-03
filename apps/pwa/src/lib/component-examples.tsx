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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "earthling-ui/tabs";

export const componentExamples = {
  accordion: (props) => (
    <Accordion
      type="single"
      collapsible
      {...props}
      className={cn("w-full max-w-md", props.className)}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet
          ullamcorper velit nisl in velit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
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
  button: (props: Record<string, any>) => (
    <Button {...props}>
      <i className="icon-[lucide--house]" />
      {props.shape !== "icon" && `Click me`}
    </Button>
  ),
  input: (props) => <Input placeholder="Type something..." {...props} />,
  textarea: (props) => (
    <TextArea
      placeholder="Type something..."
      {...props}
      className={cn("max-w-md", props.className)}
    />
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
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div>Tab 1 content</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div>Tab 2 content</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div>Tab 3 content</div>
      </TabsContent>
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
