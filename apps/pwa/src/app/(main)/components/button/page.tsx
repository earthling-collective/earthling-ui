"use client";

import { Stage } from "@/components/stage";
import { Button } from "earthling-ui/button";

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
          {(props) => (
            <Button {...props}>
              <i className="icon-[lucide--house]" />
              Click me
            </Button>
          )}
        </Stage>
      </div>
    </>
  );
}
