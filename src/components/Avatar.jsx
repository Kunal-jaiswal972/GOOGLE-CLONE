import React from "react";
import { useLocation } from "react-router-dom";

const Avatar = ({ url }) => {
  const location = useLocation();

  return (
    <img
      src={url}
      alt="Profile-pic"
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transform hover:scale-110 transition duration-150 shadow-lg dark:hover:shadow-[0_4px_12px_rgba(23,23,23,0.9)] ${
        location.pathname === "/"
          ? "block"
          : "hidden sm:block sm:ml-3 md:ml-auto"
      }`}
    />
  );
};

export default Avatar;
