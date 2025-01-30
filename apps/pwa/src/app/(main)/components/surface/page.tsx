"use client";

import { Stage } from "@/components/stage";
import { Surface } from "earthling-ui/surface";

const dependencies = [
  "class-variance-authority",
  "@radix-ui/react-slot",
  "@/utils/cn",
];

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-3xl p-4 md:my-12 md:p-0">
        <Stage
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
          {(props) => (
            <Surface {...props} className="max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie, nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit
              amet ullamcorper velit nisl in velit.
            </Surface>
          )}
        </Stage>
      </div>
    </>
  );
}
