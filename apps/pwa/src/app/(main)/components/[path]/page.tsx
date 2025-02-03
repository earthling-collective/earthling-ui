import { notFound } from "next/navigation";
import ClientComponent from "./client-component";
import { resolve } from "path";
import { readFile } from "fs/promises";

export default async function ({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  try {
    const filePath = resolve(
      process.cwd(),
      `../../packages/earthling-ui/src/components/${path}/index.tsx`,
    );
    var code = await readFile(filePath, "utf-8");
  } catch (e) {
    console.error(e);
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl py-4 md:my-12 md:p-0">
      <ClientComponent path={path} code={code} />
    </div>
  );
}
