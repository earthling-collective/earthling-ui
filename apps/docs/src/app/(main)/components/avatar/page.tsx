import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="avatar"
      anatomy={`<Avatar>
  <AvatarImage />
  <AvatarFallback />
</Avatar>`}
    />
  );
}
