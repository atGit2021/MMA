import Link from "next/link";
import { PageShell } from "@/components/page-shell";

type ArtworkPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = await params;

  return (
    <PageShell>
      <p className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          ← Back to gallery
        </Link>
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        Artwork {id}
      </h1>
      <p className="mt-4 text-neutral-600">Detail view coming in Core #2.</p>
    </PageShell>
  );
}
