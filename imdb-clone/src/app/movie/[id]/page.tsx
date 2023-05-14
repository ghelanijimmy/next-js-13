import React from "react";
import { TMDBMovieResponse } from "@/types/tmdbResponse";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

type MoviePageProps = {
  params: {
    id: string;
  };
};

const getMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return (await res.json()) as TMDBMovieResponse;
};

const MoviePage: (props: MoviePageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const movie = await getMovie(params.id);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="image not found"
          className="rounded-lg"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="flex flex-col items-center md:items-start p-2">
          <h1 className="text-2xl font-bold mb-3">
            {movie.title || movie.name}
          </h1>
          <h2 className="text-lg font-semibold mb-3">{movie.tagline}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="text-sm mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date} • {movie.runtime}{" "}
            minutes
          </p>
          <p className="text-sm mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average} / 10 • {movie.vote_count} votes
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
