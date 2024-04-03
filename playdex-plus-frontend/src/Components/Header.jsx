import React from "react";
import { SiYoutubegaming } from "react-icons/si";
import { IoHeart } from "react-icons/io5";

function Header() {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <span className="text-black font-bold text-[30px]">PlayDex</span>
        <SiYoutubegaming
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer text-violet-800 ml-2"
          size={40}
        />
        <span className="text-violet-800 font-bold text-lg ml-2 text-[30px]">
          Plus
        </span>
      </div>
      <div className="flex p-2 w-full mx-5 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <IoHeart className="text-red-500 text-4xl p-1 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
