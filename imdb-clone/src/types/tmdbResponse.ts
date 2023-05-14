export type TMDBResponseResult = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  name?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string; //'2019-11-12',
  release_date: string; //'2023-05-17',
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
};
export type TMDBResponse = {
  page: number;
  results: TMDBResponseResult[];
  total_pages: number;
  total_results: number;
};
export type TMDBMovieResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  first_air_date?: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
