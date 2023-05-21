import React from "react";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";
import "../globals.css";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchHeader />
      {children}
      <Footer />
    </div>
  );
};

export default SearchLayout;
