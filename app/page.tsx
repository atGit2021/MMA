import { EmptyGallery } from "@/components/gallery/empty-gallery";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PaginationControls } from "@/components/gallery/pagination-controls";
import { PageShell } from "@/components/page-shell";
import { getObjectIDs, getObjectsByIds } from "@/lib/met/client";
import { getLastPage, parsePageParam } from "@/lib/met/pagination";

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
    <PageShell>
      <h1 className="mb-8 text-center font-display text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        Met Museum Art Gallery
      </h1>

      <PaginationControls page={page} lastPage={lastPage} total={total} />

      <div className="mt-10">
        {artworks.length === 0 ? (
          <EmptyGallery />
        ) : (
          <GalleryGrid artworks={artworks} />
        )}
      </div>

      <div className="mt-12">
        <PaginationControls page={page} lastPage={lastPage} total={total} />
      </div>
    </PageShell>
  );
}
