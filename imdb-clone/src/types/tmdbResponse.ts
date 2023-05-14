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
