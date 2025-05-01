import { Breadcrumb, Breadcrumbs } from "earthling-ui/breadcrumbs";

export default function (props: Record<string, any>) {
  return (
    <Breadcrumbs {...props}>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Library</Breadcrumb>
      <Breadcrumb>Data</Breadcrumb>
    </Breadcrumbs>
  );
}
