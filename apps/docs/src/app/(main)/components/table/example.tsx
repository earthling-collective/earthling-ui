"use client";

import type { ComponentProps } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "earthling-ui/table";

const invoices = [
  { id: "INV-1048", status: "Paid", amount: 248, method: "Visa · 4242" },
  { id: "INV-1047", status: "Pending", amount: 96, method: "Bank transfer" },
  { id: "INV-1046", status: "Paid", amount: 312, method: "Mastercard · 9012" },
];

type TableExampleProps = ComponentProps<typeof Table>;

export default function Example(props: TableExampleProps) {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <Table {...props}>
      <TableCaption>Recent workspace invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead numeric>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell numeric>${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell numeric>${total.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
