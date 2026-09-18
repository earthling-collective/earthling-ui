import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("table");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="table"
      anatomy={`<Table>
  <TableCaption>Recent invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead numeric>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-1048</TableCell>
      <TableCell numeric>$248.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell numeric>$248.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
    />
  );
}
