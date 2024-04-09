// Header.jsx
import React, { useContext } from "react";
import { IoHeart } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Make sure to import jwtDecode
import UserContext from "../context/user"; // Import UserContext

function Header({ searchTerm, handleSearchInput, handleSearch }) {
  const { accessToken } = useContext(UserContext); // Access the accessToken from UserContext
  const decoded = jwtDecode(accessToken); // Decode the JWT token to get the username
  const username = decoded.username; // Extract the username from the decoded token

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link to="/">
          <SiYoutubegaming className="text-violet-800 font-bold text-[40px] mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        </Link>
      </div>
      <div className="flex p-2 w-full mx-5 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-3 text-sm leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
          value={searchTerm}
          onChange={handleSearchInput}
          onKeyPress={handleSearch}
        />
      </div>
      <div className="flex items-center">
        <Link to="/playlist">
          <IoHeart className="text-violet-800 text-[40px] p-1 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        </Link>
        {/* Display the username next to the heart icon */}
        <span className="text-violet-800 text-[20px] ml-2">
          Welcome, {username}
        </span>
      </div>
    </div>
  );
}

export default Header;
