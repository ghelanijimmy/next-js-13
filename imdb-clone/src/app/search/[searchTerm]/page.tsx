import React from "react";
import { TMDBResponse } from "@/types/tmdbResponse";
import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

type SearchTextProps = {
  params: {
    searchTerm: string;
  };
};

const getSearchedMovies = async (searchText: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=true`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return (await res.json()) as TMDBResponse;
};

const SearchText: (props: SearchTextProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const searchedMovies = await getSearchedMovies(params.searchTerm);
  return (
    <div className="flex justify-center">
      {(searchedMovies.results.length === 0 && (
        <h1 className="text-4xl font-bold">No results found</h1>
      )) || (
        <div className="flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
          {searchedMovies.results.map((movie) => (
            <Result key={movie.id} result={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchText;
