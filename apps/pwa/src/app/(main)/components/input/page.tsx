"use client";

import { Stage } from "@/components/stage";
import { Input } from "earthling-ui/input";

const dependencies = ["class-variance-authority", "@/utils/cn"];

export default async function ({}: {}) {
  return (
    <>
      <div className="container mx-auto max-w-3xl p-4 md:my-12 md:p-0">
        <Stage
          controls={[
            {
              label: "Size",
              prop: "size",
              type: "select",
              options: ["sm", "md", "lg"],
            },
          ]}
        >
          {(props) => <Input {...props} placeholder="Type something..." />}
        </Stage>
      </div>
    </>
  );
}
