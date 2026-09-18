"use client";

import {
  useEffect,
  useState,
  type ComponentProps,
  type MouseEvent,
} from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "earthling-ui/pagination";

type PaginationExampleProps = Pick<
  ComponentProps<typeof PaginationLink>,
  "scheme"
> & {
  currentPage?: number;
};

export default function Example({
  currentPage = 2,
  scheme,
}: PaginationExampleProps) {
  const requestedPage = Number.isFinite(currentPage)
    ? Math.min(3, Math.max(1, Math.round(currentPage)))
    : 2;
  const [activePage, setActivePage] = useState(requestedPage);

  useEffect(() => setActivePage(requestedPage), [requestedPage]);

  const selectPage = (event: MouseEvent<HTMLAnchorElement>, page: number) => {
    event.preventDefault();
    setActivePage(page);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p
        className="text-muted-foreground text-sm tabular-nums"
        aria-live="polite"
      >
        Page {activePage} of 3
      </p>
      <Pagination aria-label="Search results pages">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={activePage === 1}
              href={`?page=${Math.max(1, activePage - 1)}`}
              onClick={(event) => {
                if (activePage > 1) selectPage(event, activePage - 1);
                else event.preventDefault();
              }}
              scheme={scheme}
              tabIndex={activePage === 1 ? -1 : undefined}
            >
              <span className="sr-only">Previous page</span>
            </PaginationPrevious>
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={page === activePage}
                onClick={(event) => selectPage(event, page)}
                scheme={scheme}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              aria-disabled={activePage === 3}
              href={`?page=${Math.min(3, activePage + 1)}`}
              onClick={(event) => {
                if (activePage < 3) selectPage(event, activePage + 1);
                else event.preventDefault();
              }}
              scheme={scheme}
              tabIndex={activePage === 3 ? -1 : undefined}
            >
              <span className="sr-only">Next page</span>
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
