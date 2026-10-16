import { getObjectIDs, getObjectsByIds } from "@/lib/met/client";
import { getLastPage, parsePageParam } from "@/lib/met/pagination";
import { EmptyGallery } from "@/components/gallery/empty-gallery";
import { PaginationControls } from "@/components/gallery/pagination-controls";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

type HomeProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  let page = parsePageParam(params.page);

  let { total, objectIDs } = await getObjectIDs({
    page,
    hasImages: true,
  });

  const lastPage = getLastPage(total);

  if (page > lastPage) {
    page = lastPage;
    ({ total, objectIDs } = await getObjectIDs({
      page,
      hasImages: true,
    }));
  }

  const artworks = (await getObjectsByIds(objectIDs ?? [])).filter(
    (art) => art.primaryImageSmall?.trim() || art.primaryImage?.trim(),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl text-center font-semibold tracking-tight text-neutral-900">
        Met Museum Art Gallery
      </h1>

      <PaginationControls page={page} lastPage={lastPage} total={total} />

      <div className="mt-8">
        {artworks.length === 0 ? (
          <EmptyGallery />
        ) : (
          <GalleryGrid artworks={artworks} />
        )}
      </div>

      <PaginationControls page={page} lastPage={lastPage} total={total} />
    </main>
  );
}
