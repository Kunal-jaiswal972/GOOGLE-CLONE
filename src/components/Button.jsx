import React from "react";

const Button = ({onClick}) => {
  return (
    <div className="flex flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4 mt-10">
      <button onClick={onClick} className="btn">
        GOOGLE SEARCH
      </button>
      <button className="btn">I'M FEELING LUCKY</button>
    </div>
  );
};

export default Button;
