import { Stage } from "@/components/stage";
import { TextArea } from "earthling-ui/textarea";

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Stage
          component={TextArea}
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
