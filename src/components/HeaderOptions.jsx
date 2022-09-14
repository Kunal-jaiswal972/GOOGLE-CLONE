import React, {useContext} from "react";
import {DarkThemeContext} from "../contexts/DarkThemeContext"
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiSettings } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { BiImages, BiDotsVerticalRounded } from "react-icons/bi";
import { FaVideoSlash, FaTools } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const links = [
  { url: "/search", text: "All", Icon: <FiSearch /> },
  { url: "/image", text: "Images", Icon: <BiImages /> },
  { url: "/news", text: "News", Icon: <BsNewspaper /> },
  { url: "/video", text: "Video", Icon: <FaVideoSlash /> },
  { url: "/shopping", text: "Shopping", Icon: <FiShoppingCart /> },
  { url: "/maps", text: "Maps", Icon: <HiLocationMarker /> },
];

const tools = [
  { url: "/settings", text: "Settings", Icon: <FiSettings /> },
  { url: "/tools", text: "Tools", Icon: <FaTools /> },
];

const HeaderOptions = () => {
  const { darkTheme, toogleDarkTheme } = useContext(DarkThemeContext);


  return (
    <div className="dark:bg-[#202124] dark:text-[#9aa0a6] flex items-center justify-center lg:justify-start">
      <div className="flex items-center space-x-8">
        <button className="pb-1" onClick={ toogleDarkTheme}>
          {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <div className="flex items-center space-x-6">
          {links.map(({ url, text, Icon }) => (
            <NavLink
              key={url}
              to={url}
              className={({ isActive }) =>
                "flex items-center justify-center space-x-2 hover:text-[#8ab4f8] cursor-pointer hover:border-b-[4px] hover:border-[#8ab4f8] hover:pb-1 transition duration-150 " +
                (isActive
                  ? "text-[#8ab4f8] border-b-[4px] border-[#8ab4f8] pb-1"
                  : " ")
              }
            >
              <div>{Icon}</div>
              <div className="hidden md:inline-flex text-sm">{text}</div>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <BiDotsVerticalRounded className="text-gray-500 cursor-pointer" />
          <div className="flex items-center justify-center space-x-6">
            {tools.map(({ url, text, Icon }) => (
              <NavLink
                key={url}
                to={url}
                className={({ isActive }) =>
                  "flex items-center justify-center space-x-2 hover:text-[#8ab4f8] cursor-pointer hover:border-b-[4px] hover:border-[#8ab4f8] hover:pb-1 transition duration-150 " +
                  (isActive
                    ? "text-[#8ab4f8] border-b-[4px] border-[#8ab4f8] pb-1"
                    : " ")
                }
              >
                <div>{Icon}</div>
                <div className="hidden md:inline-flex text-sm">{text}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOptions;
