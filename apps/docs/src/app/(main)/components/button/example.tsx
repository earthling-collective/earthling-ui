import { Button } from "earthling-ui/button";

export default function (props: Record<string, any>) {
  return (
    <Button {...props}>
      <i className="icon-[lucide--house]" />
      {props.shape !== "icon" && `Click`}
    </Button>
  );
}
