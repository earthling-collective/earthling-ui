import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="scroll-area"
      anatomy={`<ScrollArea>
  {children}
</ScrollArea>`}
    />
  );
}
