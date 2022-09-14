import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Avatar from "./Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderOptions from "./HeaderOptions";

const SearchResultsHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (searchTerm === "") return;

    navigate(`${location.pathname}?q=${searchTerm}`);
  };

  return (
    <header className="sm:p-8 sm:pb-0 pl-0 sm:pl-20 sticky top-0 bg-white border-b-gray-200 border-b-[1px] flex flex-col justify-around space-y-6 dark:bg-[#202124] dark:text-[#d8d8d8]">
      <div className="flex flex-col sm:flex-row w-full items-center">
        <img
          onClick={() => navigate("/")}
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
          className="w-28 mt-4 sm:mt-0 object-contain mb-2 sm:mb-0 sm:mr-5 cursor-pointer"
        />
        <form className="flex items-center hover:shadow-lg focus-within:shadow-lg w-[50%] rounded-full border-[1px] border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl dark:bg-[#303134] dark:hover:shadow-[0_4px_12px_rgba(23,23,23,0.9)] dark:border-0">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none dark:bg-[#303134] dark:text-[#d8d8d8]"
          />
          <AiOutlinePlus
            onClick={() => (searchInputRef.current.value = "")}
            className="w-[1.5em] h-[1.5em] mr-3 text-gray-500 cursor-pointer transition duration-100 transform rotate-45 hover:scale-125 "
          />
          <FaMicrophone className="hidden sm:inline-flex h-[1.5em] w-[1.7em] mr-5 border-l-2 pl-3 border-gray-300 text-blue-500 cursor-pointer" />
          <FiSearch
            className="hidden sm:inline-flex h-[1.3em] w-[1.3em] text-blue-500 cursor-pointer"
            onClick={search}
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar url="https://lh3.googleusercontent.com/ogw/AOh-ky25Nzps4eNaBvxZBgMVKnNgWrttWIPUOb40jbX1=s64-c-mo" />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default SearchResultsHeader;
