import { MovieDataType } from "./movie-type";

export const getQuery = (limit: number, page: number): string =>
  `pagination[start]=${page ? page * limit : 0}&pagination[limit]=${limit}`;

export const getSmallPoster = (movie: MovieDataType): string =>
  movie.attributes.poster.data.attributes.formats.small.url.replace(
    "https://https",
    "https://aicdn.sgp1.cdn.digitaloceanspaces.com"
  );

export const getLargePoster = (movie: MovieDataType): string =>
  movie.attributes.poster.data.attributes.url.replace(
    "https://https",
    "https://aicdn.sgp1.cdn.digitaloceanspaces.com"
  );
