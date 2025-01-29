import { Stage } from "@/components/stage";
import { Input } from "earthling-ui/input";

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Stage
          component={Input}
          controls={[
            {
              label: "Size",
              prop: "size",
              type: "select",
              options: ["sm", "md", "lg"],
            },
          ]}
        ></Stage>
      </div>
    </>
  );
}
