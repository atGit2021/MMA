import { PAGE_SIZE } from "@/lib/met/constants";

export function parsePageParam(page: string | string[] | undefined): number {
  // if user sends multiple pages in the params just use the first page
  const raw = Array.isArray(page) ? page[0] : page;
  const parsed = Number(raw);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
}

export function getLastPage(total: number): number {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}
