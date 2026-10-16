import Link from "next/link";

type PaginationControlsProps = {
  page: number;
  lastPage: number;
  total: number;
};

export function PaginationControls({
  page,
  lastPage,
  total,
}: PaginationControlsProps) {
  const hasPrev = page > 1;
  const hasNext = page < lastPage;
  const prevHref = page === 2 ? "/" : `/?page=${page - 1}`;
  const nextHref = `/?page=${page + 1}`;

  const linkClassName =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-neutral-900";
  const disabledClassName =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-200 px-4 py-2 text-base text-neutral-400";

  return (
    <nav
      className="flex flex-col items-center gap-4 border-y border-neutral-200/80 py-4 sm:flex-row sm:justify-between"
      aria-label="Gallery pagination"
    >
      <p className="text-base text-neutral-600">
        Page {page} of {lastPage}
        <span className="text-neutral-400">
          {" "}
          · {total.toLocaleString()} works
        </span>
      </p>

      <div className="flex items-center gap-3">
        {hasPrev ? (
          <Link href={prevHref} className={linkClassName}>
            Previous
          </Link>
        ) : (
          <span className={disabledClassName}>Previous</span>
        )}

        {hasNext ? (
          <Link href={nextHref} className={linkClassName}>
            Next
          </Link>
        ) : (
          <span className={disabledClassName}>Next</span>
        )}
      </div>
    </nav>
  );
}
