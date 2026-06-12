import { Kbd } from "earthling-ui/kbd";

export default function (props: Record<string, any>) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <Kbd {...props}>Ctrl</Kbd>
      <span>+</span>
      <Kbd {...props}>K</Kbd>
    </div>
  );
}
