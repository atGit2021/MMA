import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkDetail } from "@/components/artwork/artwork-detail";
import { PageShell } from "@/components/page-shell";
import { getObjectById } from "@/lib/met/client";
import { parseArtworkId } from "@/lib/met/parse-artwork-id";
import { parsePageParam } from "@/lib/met/pagination";

type ArtworkPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string | string[] }>;
};

export default async function ArtworkPage({
  params,
  searchParams,
}: ArtworkPageProps) {
  const { id: rawId } = await params;
  const id = parseArtworkId(rawId);

  if (id === null) {
    notFound();
  }

  const artwork = await getObjectById(id);

  if (!artwork) {
    notFound();
  }

  const { from } = await searchParams;
  const fromPage = parsePageParam(from);
  const galleryHref = fromPage <= 1 ? "/" : `/?page=${fromPage}`;

  return (
    <PageShell>
      <p className="mb-8">
        <Link
          href={galleryHref}
          className="text-base font-medium text-neutral-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          ← Back to gallery
        </Link>
      </p>
      <ArtworkDetail artwork={artwork} />
    </PageShell>
  );
}
