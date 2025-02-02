import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
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

export const componentExamples = {
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
  ["toggle-group"]: (props) => (
    <ToggleGroup {...props} type="single">
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
