import React from "react";
const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 absolute bottom-0 bg-[#f2f2f2] text-sm text-gray-700 mt-32 dark:bg-[#171717] dark:text-[#9aa0a6]">
      <div className="px-8 py-3 text-center md:text-left">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
