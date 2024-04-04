// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";

function Header({ setSearchTerm }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link to="/">
          <SiYoutubegaming className="text-violet-800 font-bold text-[40px] mr-2" />
        </Link>
      </div>
      <div className="flex p-2 w-full mx-5 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-3 text-sm leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <Link to="/playlist">
          <IoHeart className="text-violet-800 text-[40px] p-1 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
