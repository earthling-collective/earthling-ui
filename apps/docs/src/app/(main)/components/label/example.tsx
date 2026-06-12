import { Label } from "earthling-ui/label";
import { Checkbox } from "earthling-ui/checkbox";

export default function (props: Record<string, any>) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="label-example" scheme="primary" />
      <Label htmlFor="label-example" {...props}>
        Accept terms and conditions
      </Label>
    </div>
  );
}
