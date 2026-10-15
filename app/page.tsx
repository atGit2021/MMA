import Link from "next/link";
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

  const artworks = await getObjectsByIds(objectIDs ?? []);

  const hasPrev = page > 1;
  const hasNext = page < lastPage;

  return (
    <main>
      <h1>Met Museum Gallery</h1>
      <p>
        Page {page} of {lastPage} ({total} works with images)
      </p>

      {artworks.length === 0 ? (
        <p>No artworks to show.</p>
      ) : (
        <ul>
          {artworks.map((artwork) => (
            <li key={artwork.objectID}>
              <Link href={`/artwork/${artwork.objectID}`}>
                {artwork.title?.trim() || "Untitled"}
              </Link>
              {" — "}
              {artwork.artistDisplayName?.trim() || "Unknown artist"}
            </li>
          ))}
        </ul>
      )}

      <nav>
        {hasPrev ? (
          <Link href={page === 2 ? "/" : `/?page=${page - 1}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
        {" | "}
        {hasNext ? (
          <Link href={`/?page=${page + 1}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </nav>
    </main>
  );
}
