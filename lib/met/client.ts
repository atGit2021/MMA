import {
  MET_API_BASE_URL,
  PAGE_SIZE,
  REVALIDATE_SECONDS,
} from "@/lib/met/constants";
import type {
  GetObjectIDsParams,
  MetArtwork,
  MetSearchResponse,
} from "@/lib/met/types";

export async function getObjectIDs({
  page,
  hasImages,
  departmentId,
  q,
  title,
}: GetObjectIDsParams): Promise<MetSearchResponse> {
  const offset = (page - 1) * PAGE_SIZE;

  const url = new URL(`${MET_API_BASE_URL}/v1.1/search`);
  url.searchParams.set("offset", String(offset));
  url.searchParams.set("limit", String(PAGE_SIZE));

  if (hasImages !== undefined) {
    url.searchParams.set("hasImages", String(hasImages));
  }
  if (departmentId !== undefined) {
    url.searchParams.set("departmentId", String(departmentId));
  }
  if (q !== undefined) {
    url.searchParams.set("q", q);
  }
  if (title !== undefined) {
    url.searchParams.set("title", String(title));
  }

  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `Met search failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<MetSearchResponse>;
}

export async function getObjectById(
  objectId: number,
): Promise<MetArtwork | null> {
  if (!Number.isInteger(objectId) || objectId < 1) return null;

  const url = new URL(`${MET_API_BASE_URL}/v1/objects/${objectId}`);

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as MetArtwork;
  } catch (error) {
    console.error(`Failed to fetch object ${objectId}:`, error);
    return null;
  }
}

export async function getObjectsByIds(
  objectIds: number[],
): Promise<MetArtwork[]> {
  if (objectIds.length === 0) return [];

  const responses = await Promise.all(objectIds.map((id) => getObjectById(id)));

  return responses.filter((artwork): artwork is MetArtwork => artwork !== null);
}
