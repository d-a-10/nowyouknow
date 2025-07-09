import { MovieDataType } from "./movie-type";

export const CalculateOverall = (movie: MovieDataType): number => {
  const violence_rating = GetPercentage(movie.violence_rating);
  const inappropriate_rating = GetPercentage(movie.inappropriate_rating);
  const language_rating = GetPercentage(movie.language_rating);

  const total = violence_rating + inappropriate_rating + language_rating;

  return Math.floor((total * 100) / 300);
};

export const GetPercentage = (score: number): number => {
  let convertedScore = score * 10
  if (convertedScore > 100) {
    convertedScore = Math.floor(convertedScore / 10)
  }

  return convertedScore
}