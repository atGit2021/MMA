import Image from "next/image";
import Link from "next/link";
import type { MetArtwork } from "@/lib/met/types";

type GalleryCardProps = {
  artwork: MetArtwork;
};

export function GalleryCard({ artwork }: GalleryCardProps) {
  const title = artwork.title?.trim() || "Untitled";
  const artist = artwork.artistDisplayName?.trim() || "Unknown artist";
  const imageSrc =
    artwork.primaryImageSmall?.trim() || artwork.primaryImage?.trim();

  return (
    <article>
      <Link href={`/artwork/${artwork.objectID}`} className="block">
        <div className="relative aspect-4/5 overflow-hidden bg-neutral-200">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-500">
              No image
            </div>
          )}
        </div>
        <h2 className="mt-3 text-center text-base font-medium text-neutral-900">
          {title}
        </h2>
        <p className="mt-1 text-center text-sm text-neutral-600">{artist}</p>
      </Link>
    </article>
  );
}
