import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("avatar");

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
