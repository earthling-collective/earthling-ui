import { Stage } from "@/components/stage";
import { Button } from "earthling-ui/button";

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Stage
          component={Button}
          controls={[
            {
              label: "Variant",
              prop: "variant",
              type: "select",
              options: ["filled", "outline", "ghost"],
            },
            {
              label: "Size",
              prop: "size",
              type: "select",
              options: ["sm", "md", "lg", "icon"],
            },
            {
              label: "Color Scheme",
              prop: "scheme",
              type: "select",
              options: ["default", "primary", "secondary", "good", "bad"],
            },
          ]}
        >
          Hello
        </Stage>
      </div>
    </>
  );
}
