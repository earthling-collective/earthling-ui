import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("avatar");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="avatar"
      anatomy={`<Avatar size="md">
  <AvatarImage src="/avatar.jpg" alt="Portrait of Alex Morgan" />
  <AvatarFallback>AM</AvatarFallback>
</Avatar>`}
    />
  );
}
