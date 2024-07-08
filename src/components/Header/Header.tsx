"use client";

import { useState } from "react";

const Header = () => {
  const [isObserv, setIsObserv] = useState(false);
  return (
    <header
      className={`${
        isObserv ? "bg-gray-200" : ""
      } w-[1440px] sticky top-0 mx-auto h-[80px] content-center z-50 header_img`}
    >
      <div className="container mx-auto flex justify-around text-white content-center">
        <span className="text-4xl font-semibold">Learn-IT</span>
        <ul className="text-lg font-medium hidden md:flex items-center gap-[40px]">
          <li>Home</li>
          <li>Blog</li>
          <li>Feedback</li>
        </ul>
        <button className="w-[143px] h-[50px] bg-[#1E85FE] rounded-full text-lg font-medium text-white">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
