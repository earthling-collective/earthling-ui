import { Progress } from "earthling-ui/progress";

export default function (props: Record<string, any>) {
  return <Progress className="w-[60%]" {...props} />;
}
