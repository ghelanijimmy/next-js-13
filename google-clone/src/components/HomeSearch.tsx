"use client";
import React, { FormEvent, MouseEvent, useState } from "react";
import { AiOutlineSearch, BsFillMicFill } from "react-icons/all";
import Image from "next/image";
import { useSearch } from "@/hooks/useSearch";

const HomeSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disableSearch, setDisableSearch] = useState(false);

  const {
    search,
    searchTerm: inputValue,
    setSearchTerm: setInputValue,
  } = useSearch();

  const handleSubmit = (e: MouseEvent | FormEvent) => {
    setDisableSearch(true);
    e.preventDefault();
    if (inputValue.trim()) {
      search("/search/web");
    }
  };

  const randomSearch = async (e: MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setDisableSearch(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    if (!res.ok) {
      setIsLoading(false);
      setDisableSearch(false);
      throw new Error(data.message || "Something went wrong!");
    }
    search("/search/web", data[0]);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch
          className="text-xl text-gray-500 mr-3 flex-shrink-0"
          onClick={(e) => handleSubmit(e)}
        />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="focus:outline-none flex-grow flex-shrink"
        />
        <BsFillMicFill
          className="text-lg text-gray-500 ml-3 flex-shrink-0"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      <div className="flex space-y-2 flex-col sm:flex-row sm:gap-4 sm:space-y-0 justify-center items-center mt-8">
        <button
          disabled={disableSearch}
          onClick={(e) => handleSubmit(e)}
          className="btn"
        >
          Google Search
        </button>
        <button
          disabled={disableSearch}
          onClick={(e) => randomSearch(e)}
          className="btn"
        >
          {(isLoading && (
            <Image
              src="spinner.svg"
              alt="Loading"
              width={20}
              height={20}
              className="m-auto"
            />
          )) ||
            "I Am Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
