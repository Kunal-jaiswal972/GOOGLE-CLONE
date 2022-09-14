import React, { useContext } from "react";
import Avatar from "./Avatar";
import { CgMenuGridO } from "react-icons/cg";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../contexts/DarkThemeContext";

const NavBar = () => {
   const {darkTheme, toogleDarkTheme} = useContext(DarkThemeContext);
  
  return (
    <div className="flex w-full items-center p-5 text-sm text-gray-700 dark:text-[#d8d8d8]">
      <div className="flex items-center justify-self-start mr-5 sm:mr-0 flex-grow space-x-4 font-[600]">
        <p className="link">ABOUT</p>
        <p className="link">STORE</p>
      </div>

      <div className="flex items-center justify-self-end space-x-3 font-[600] mr-5">
        <button onClick={toogleDarkTheme}>
          {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <p className="link">GMAIL</p>
        <Link to="/image" className="link">
          IMAGES
        </Link>
      </div>
      <CgMenuGridO className="h-10 w-10 p-2 mx-3 rounded-full hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-800" />
      <Avatar url="https://lh3.googleusercontent.com/ogw/AOh-ky25Nzps4eNaBvxZBgMVKnNgWrttWIPUOb40jbX1=s64-c-mo" />
    </div>
  );
};

export default NavBar;
