import React, { FC } from "react";
import { ImageSearchResult } from "@/types/SearchResult";
import Link from "next/link";
import PaginationButtons from "@/components/PaginationButtons";
import { SearchResultsProps } from "@/types/SearchResultsProps";

const ImageSearchResults: FC<SearchResultsProps<ImageSearchResult>> = ({
  results,
}) => {
  return (
    <div className="pb-40 sm:pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.items?.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <Link href={result.image.contextLink} target="_blank">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                  src={result.link}
                  alt={result.title}
                />
              </Link>
              <Link href={result.image.contextLink} target="_blank">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <h2 className="group-hover:underline truncate text-sm">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink} target="_blank">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <p className="group-hover:underline text-gray-600 text-sm">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:ml-8">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageSearchResults;
