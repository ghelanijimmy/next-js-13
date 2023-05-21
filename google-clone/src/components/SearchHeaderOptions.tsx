"use client";

import React from "react";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/all";
import SearchHeaderOption from "@/components/SearchHeaderOption";
import { useSearch } from "@/hooks/useSearch";

const SearchHeaderOptions = () => {
  const { search, pathName } = useSearch();
  const selectTab = (tab: "Images" | "All") => {
    const path = `/search/${tab === "Images" ? "image" : "web"}`;
    search(path);
  };

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700">
      <SearchHeaderOption
        isActive={pathName === "/search/web"}
        selectTab={selectTab}
        tab="All"
        Icon={AiOutlineSearch}
      />
      <SearchHeaderOption
        isActive={pathName === "/search/image"}
        selectTab={selectTab}
        tab="Images"
        Icon={AiOutlineCamera}
      />
    </div>
  );
};

export default SearchHeaderOptions;
