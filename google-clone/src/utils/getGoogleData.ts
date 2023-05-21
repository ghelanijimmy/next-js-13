import { ImageSearchResult } from "@/types/SearchResult";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

export const getGoogleData = async <T>(
  searchTerm: string,
  startIndex: string,
  isImageSearch: T extends ImageSearchResult ? true : false
): Promise<T> => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}${
    isImageSearch && "&searchType=image"
  }&start=${startIndex}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching data from Google");
  return await response.json();
};
