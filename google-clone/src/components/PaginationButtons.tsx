"use client";

import React, { FC } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/all";
import Link from "next/link";
import { useSearch } from "@/hooks/useSearch";

interface PaginationButtonsProps {}

const PaginationButtons: FC<PaginationButtonsProps> = () => {
  const { pathName, searchTerm, startIndex, searchPath } = useSearch();

  return (
    <div className="text-blue-700 flex items-center px-10 pb-4 justify-between sm:justify-start sm:space-x-24 sm:px-0">
      {startIndex >= 10 && (
        <Link href={`${searchPath}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
