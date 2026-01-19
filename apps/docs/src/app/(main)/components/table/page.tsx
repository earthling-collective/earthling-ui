import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="table"
      anatomy={`<Table>
  <TableCaption />
  <TableHeader>
    <TableRow>
      <TableHead />
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell />
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell />
    </TableRow>
  </TableFooter>
</Table>`}
    />
  );
}
