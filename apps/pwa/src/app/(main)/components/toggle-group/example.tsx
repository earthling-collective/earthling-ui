import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";

export default function (props: Record<string, any>) {
  return (
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
  );
}
