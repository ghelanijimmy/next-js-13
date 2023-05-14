"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    console.log(searchText);
    e.preventDefault();
    if (searchText) {
      router.push(`/search/${searchText}`);
    }
  };

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none px-4 bg-transparent flex-1"
        type="text"
        placeholder="Search for a movie"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        disabled={!searchText}
        className="text-gray-100 px-4 py-2 disabled:text-gray-100 disabled:bg-gray-400 bg-amber-500 rounded-sm transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
