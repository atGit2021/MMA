import Image from "next/image";
import type { MetArtwork } from "@/lib/met/types";

type ArtworkDetailProps = {
  artwork: MetArtwork;
};

function MetaRow({ label, value }: { label: string; value: string }) {
  const text = value?.trim();
  if (!text) return null;

  return (
    <div className="text-center">
      <dt className="text-base font-medium text-neutral-500">{label}</dt>
      <dd className="mt-1 wrap-break-word text-lg text-neutral-900">{text}</dd>
    </div>
  );
}

export function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const title = artwork.title?.trim() || "Untitled";
  const artist = artwork.artistDisplayName?.trim() || "Unknown artist";
  const imageSrc =
    artwork.primaryImage?.trim() || artwork.primaryImageSmall?.trim();

  return (
    <article className="mx-auto max-w-3xl">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          width={1600}
          height={2000}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full"
        />
      ) : (
        <div className="flex aspect-4/5 w-full items-center justify-center bg-neutral-200 text-neutral-500">
          No image available
        </div>
      )}

      <div className="mt-8">
        <h1 className="font-display text-4xl text-center font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-center text-xl text-neutral-700">{artist}</p>
        {artwork.artistDisplayBio?.trim() ? (
          <p className="mt-2 text-center text-base text-neutral-500">
            {artwork.artistDisplayBio.trim()}
          </p>
        ) : null}
      </div>

      <dl className="mx-auto mt-10 grid max-w-2xl gap-y-6 gap-x-12 sm:grid-cols-2">
        <MetaRow label="Department" value={artwork.department} />
        <MetaRow label="Object type" value={artwork.objectName} />
        <MetaRow label="Date" value={artwork.objectDate} />
        <MetaRow label="Culture" value={artwork.culture} />
        <MetaRow label="Period" value={artwork.period} />
      </dl>
    </article>
  );
}
