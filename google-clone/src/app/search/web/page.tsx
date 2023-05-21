import React from "react";
import { WebSearchResult } from "@/types/SearchResult";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";
import { getGoogleData } from "@/utils/getGoogleData";
import { SearchPageProps } from "@/types/SearchPageProps";

const WebSearchPage: (
  params: SearchPageProps
) => Promise<JSX.Element> = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";

  const data = await getGoogleData<WebSearchResult>(
    searchParams.searchTerm,
    startIndex.toString(),
    false
  );
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results</h1>
        <p className="text-lg">
          Try searching for something else or check your internet connection
        </p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <WebSearchResults results={data} />
    </>
  );
};

export default WebSearchPage;
