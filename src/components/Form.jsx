import React, { useRef } from "react";
import Button from "./Button";
import { FiSearch} from "react-icons/fi";
import {FaMicrophone} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (searchTerm === "") return;

    navigate(`${location.pathname === "/" ? "search": location.pathname}?q=${searchTerm}`);
  };

  return (
    <form className="flex flex-col items-center mt-10 w-4/5 mb-10 dark:text-[#d8d8d8]">
      <img
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
        className="w-80"
      />
      <div className="flex items-center w-[55%] hover:shadow-lg focus-within:shadow-lg max-w-md mt-10 rounded-full border-2 border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl dark:bg-[#303134] dark:hover:shadow-[0_4px_12px_rgba(23,23,23,0.9)] dark:border-0">
        <FiSearch
          onClick={search}
          className="w-[1.5em] h-[1.5em] mr-5 text-gray-500 cursor-pointer"
        />
        <input
          ref={searchInputRef}
          type="text"
          autoFocus={true}
          className="flex-grow focus:outline-none bg-white dark:bg-[#303134]"
        />
        <FaMicrophone className="h-5 cursor-pointer" />
      </div>
      <Button onClick={search} />
    </form>
  );
};

export default Form;
