import { Avatar, AvatarImage, AvatarFallback } from "earthling-ui/avatar";

export default function (props: Record<string, any>) {
  return (
    <Avatar {...props}>
      <AvatarImage src="https://github.com/sfrady20.png" alt="@sfrady20" />
      <AvatarFallback>SF</AvatarFallback>
    </Avatar>
  );
}
