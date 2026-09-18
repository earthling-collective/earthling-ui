import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("pagination");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="pagination"
      anatomy={`<Pagination aria-label="Search results pages">
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="?page=1" /></PaginationItem>
    <PaginationItem><PaginationLink href="?page=2" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="?page=3" /></PaginationItem>
  </PaginationContent>
</Pagination>`}
    />
  );
}
