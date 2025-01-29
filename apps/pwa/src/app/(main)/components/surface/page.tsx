import { Stage } from "@/components/stage";
import { Surface } from "earthling-ui/surface";

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Stage
          component={Surface}
          controls={[
            {
              label: "Material",
              prop: "material",
              type: "select",
              options: ["paper", "glass"],
            },
            {
              label: "Interactive",
              prop: "interactive",
              type: "select",
              options: ["true", "false"],
            },
          ]}
        >
          Hello
        </Stage>
      </div>
    </>
  );
}
