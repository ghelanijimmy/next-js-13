import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const querySearchTerm = searchParams.get("searchTerm") || "";
  const startIndex = Number(searchParams.get("start")) || 1;
  const [searchTerm, setSearchTerm] = useState(querySearchTerm);
  const router = useRouter();

  const returnSearchPath = (path: string, term: string) =>
    `${path}?searchTerm=${term}`;

  const searchPath = returnSearchPath(pathName, searchTerm);

  const search = (customPathName?: string, customSearchText?: string) => {
    const searchPath = returnSearchPath(
      customPathName || pathName,
      customSearchText || searchTerm
    );
    router.push(searchPath);
  };

  return {
    search,
    searchTerm,
    setSearchTerm,
    pathName,
    searchPath,
    startIndex,
  };
};
