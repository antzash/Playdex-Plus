import React from "react";
import { IoHeart } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si"; // Import the YouTube icon
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link to="/">
          {" "}
          {/* Add this line */}
          <SiYoutubegaming className="text-violet-800 font-bold text-[40px] mr-2" />{" "}
          {/* Use the YouTube icon */}
        </Link>{" "}
        {/* Close the Link tag */}
      </div>
      <div className="flex p-2 w-full mx-5 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-3 text-sm leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <Link to="/playlist">
          {" "}
          {/* Add this line */}
          <IoHeart className="text-violet-800 text-[40px] p-1 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        </Link>{" "}
        {/* Close the Link tag */}
      </div>
    </div>
  );
}

export default Header;
