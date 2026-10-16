import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function ArtworkNotFound() {
  return (
    <PageShell>
      <p className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          ← Back to gallery
        </Link>
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        Artwork not found
      </h1>
      <p className="mt-4 text-neutral-600">That object ID isn’t available.</p>
    </PageShell>
  );
}
