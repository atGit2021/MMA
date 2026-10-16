export function parseArtworkId(param: string): number | null {
  const id = Number(param);

  if (!Number.isInteger(id) || id < 1) {
    return null;
  }

  return id;
}
