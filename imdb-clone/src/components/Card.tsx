import React, { FC } from "react";
import { TMDBResponseResult } from "@/types/tmdbResponse";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/all";

type CardProps = {
  result: TMDBResponseResult;
};

const Card: FC<CardProps> = ({ result }) => {
  return (
    <Link
      href={`/movie/${result.id}`}
      className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 group"
    >
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          alt="image not found"
          className="object-cover w-full h-full rounded-lg group-hover:opacity-75 transition-opacity duration-200"
          width={210}
          height={315}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 p-2 group-hover:hidden">
          <h1 className="text-xl font-bold">{result.title || result.name}</h1>
          {result.original_name && (
            <h2 className="text-sm font-semibold">{result.original_name}</h2>
          )}
          <p className="text-sm font-semibold">
            {result.media_type && `${result.media_type} • `}
          </p>
          <p className="text-sm font-semibold">
            {result.release_date || result.first_air_date}
          </p>
          <p className="text-sm font-semibold">{result.vote_average} / 10</p>
          <p className="text-sm font-semibold">
            <FiThumbsUp className="inline-block mr-1" />
            {result.vote_count}
          </p>
        </div>
        <div className="absolute flex justify-center items-center text-center inset-0 opacity-0 p-2 group-hover:opacity-100 group-hover:visible transition-opacity duration-100">
          <p className="text-xs">{result.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
