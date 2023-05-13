import React from "react";
import NavBarItem from "@/components/NavBar/NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
