import ClientComponent from "./client-component";

export default async function ({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <div className="container mx-auto max-w-3xl p-4 md:my-12 md:p-0">
      <ClientComponent path={path} />
    </div>
  );
}
