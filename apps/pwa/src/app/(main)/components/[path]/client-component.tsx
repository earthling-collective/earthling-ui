"use client";

import { Stage } from "@/components/stage";
import { componentExamples } from "@/lib/component-examples";
import { componentInformation } from "@/lib/component-info";
import { notFound } from "next/navigation";
import { useMemo } from "react";

export default function ({ path }: { path: string }) {
  const info = useMemo(
    () => componentInformation.find((c) => c.path === path),
    [path],
  );

  if (!info) return notFound();

  return (
    <>
      <Stage controls={info?.props || []}>{componentExamples[info.path]}</Stage>
    </>
  );
}
