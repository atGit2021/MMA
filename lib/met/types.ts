export type MetSearchResponse = {
  total: number;
  objectIDs: number[] | null;
};

export type MetArtwork = {
  objectID: number;
  title: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  department: string;
  objectName: string;
  objectDate: string;
  culture: string;
  period: string;
  dimensions: string;
  primaryImageSmall: string;
  primaryImage: string;
};

export type GetObjectIDsParams = {
  page: number;
  hasImages?: boolean;
  departmentId?: number;
  q?: string;
  title?: boolean;
};
