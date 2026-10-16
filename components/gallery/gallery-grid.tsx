import { GalleryCard } from "@/components/gallery/gallery-card";
import type { MetArtwork } from "@/lib/met/types";

type GalleryGridProps = {
  artworks: MetArtwork[];
};

export function GalleryGrid({ artworks }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {artworks.map((artwork) => (
        <GalleryCard key={artwork.objectID} artwork={artwork} />
      ))}
    </div>
  );
}
