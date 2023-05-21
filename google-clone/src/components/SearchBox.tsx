"use client";

import React from "react";
import { AiOutlineSearch, BsFillMicFill, RxCross2 } from "react-icons/all";
import { useSearch } from "@/hooks/useSearch";

const SearchBox = () => {
  const { search, searchTerm: term, setSearchTerm: setTerm } = useSearch();

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (term.trim()) {
      search();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl"
    >
      <input
        className="w-full focus:outline-none flex-1"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => {
          setTerm("");
        }}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
