import { MovieDataType } from "./movie-type";

/**
 * Builds a query string from an object.
 */
export const getQuery = (queryParams: Record<string, string | number | boolean | undefined | null>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

/**
 * Returns the small poster URL with CDN replacement if available.
 */
export const getSmallPoster = (movie: MovieDataType): string | undefined => {
  const url = movie.poster?.formats.small.url;

  if (!url) {
    console.warn(`No small poster URL found for movie: ${movie.title}`);
    return undefined;
  }

  const cleanedUrl = url.replace(
    "https://https",
    "https://aicdn.sgp1.cdn.digitaloceanspaces.com"
  );

  return cleanedUrl;
};

/**
 * Returns the large poster URL with CDN replacement if available.
 */
export const getLargePoster = (movie: MovieDataType): string | undefined => {
  const url = movie.poster?.formats.large.url;

  if (!url) {
    console.warn(`No large poster URL found for movie: ${movie.title}`);
    return undefined;
  }

  const cleanedUrl = url.replace(
    "https://https",
    "https://aicdn.sgp1.cdn.digitaloceanspaces.com"
  );

  return cleanedUrl;
};
