import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/all";

const HomeHeader = () => {
  return (
    <header>
      <div className="flex items-center gap-4 justify-end p-5">
        <Link className="hover:underline" href={`https://mail.google.com`}>
          Gmail
        </Link>
        <Link className="hover:underline" href={`https://image.google.com`}>
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 transition-all duration-100" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 transition-all duration-100">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
