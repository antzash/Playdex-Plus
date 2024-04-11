// GameCard.jsx
import React, { useState, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa"; // Import the plus icon
import { jwtDecode } from "jwt-decode";
import UserContext from "../context/user";

const GameCard = ({ game, playlists, onAddToPlaylist }) => {
  const { accessToken } = useContext(UserContext);
  const decoded = jwtDecode(accessToken);
  const username = decoded.username;

  // platformStr is a string that contains the platforms
  const platformStr = game.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  // Truncate the platformStr if it's longer than 30 characters
  const truncatedPlatformStr =
    platformStr.length > 30
      ? `${platformStr.substring(0, 30)}...`
      : platformStr;

  // Map over the genres array to create a string of genre names
  const genreStr = game.genres.map((genre) => genre.name).join(", ");

  // State for managing hover and screenshot index
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  // Effect to change screenshot on hover
  useEffect(() => {
    let intervalId;
    if (
      isHovered &&
      game.short_screenshots &&
      game.short_screenshots.length > 0
    ) {
      intervalId = setInterval(() => {
        setCurrentScreenshotIndex(
          (prevIndex) => (prevIndex + 1) % game.short_screenshots.length
        );
      }, 800);
    }
    return () => clearInterval(intervalId); // Cleanup on component unmount or hover end
  }, [isHovered, game.short_screenshots]);

  const handleAddToFavourites = async () => {
    try {
      const response = await fetch("http://localhost:5001/games/favourites", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...game, username }), // Include the username in the body
      });

      if (!response.ok) {
        throw new Error("Failed to add game to favourites");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error adding game to favourites:", error);
    }
  };

  return (
    <div
      key={game.id}
      className="p-5 relative rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full shadow-xl hover:shadow-lg hover:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          src={
            isHovered &&
            game.short_screenshots &&
            game.short_screenshots.length > 0
              ? game.short_screenshots[currentScreenshotIndex].image
              : game.background_image
          }
          alt={game.name}
          className="lazy h-[200px] w-full rounded-xl object-cover"
          loading="lazy"
        />
        <h2 className="text-[16px] mt-2 text-left text-violet-800 font-bold">
          {game.name}
        </h2>
      </div>
      <div className="text-[12px] text-left text-black font-bold">
        {genreStr}
      </div>
      <div className="text-[10px] text-left text-black font-light mt-2">
        {truncatedPlatformStr}
      </div>
      <div className="absolute bottom-0 right-0 m-5">
        <button
          className="hover:bg-violet-500 text-violet-800 py-2 px-4 rounded-full flex items-center justify-center"
          onClick={handleAddToFavourites}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

// Function to add a game to the favourites
async function addFavourites(game) {
  const response = await fetch("http://localhost:5001/games/favourites", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });

  if (!response.ok) {
    throw new Error("Failed to add game to favourites");
  }

  return await response.json();
}

export default GameCard;
