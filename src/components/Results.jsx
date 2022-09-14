import React from "react";
import Footer from "./Footer";
import SearchResultsHeader from "./SearchResultsHeader";

const Results = () => {
  return (
    <div className="h-[200vh] dark:bg-[#202124] dark:text-[#d8d8d8] relative">
      <SearchResultsHeader/>
      <h1 className="flex items-center justify-center">results</h1>
      <Footer />
    </div>
  );
};

export default Results;
