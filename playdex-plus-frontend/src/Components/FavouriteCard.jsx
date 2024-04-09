// src/Components/FavouriteCard.jsx
import React, { useState, useEffect, useContext } from "react";
import { FaMinus } from "react-icons/fa";
import UserContext from "../context/user"; // Import UserContext

const FavouriteCard = ({ game, onRemove }) => {
  const { accessToken } = useContext(UserContext); // Access the accessToken from UserContext
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState(game.status);

  // Assuming platformStr is a string that contains the platforms
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

  const gameStatusOptions = [
    "Not Bought",
    "Bought",
    "Played",
    "Repeat",
    "Wait For Sale",
    "Not My Thing",
  ];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleRemoveGame = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/games/favourites/${game._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Include the accessToken in the Authorization header
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove game from favourites");
      }

      // Call the onRemove function passed from the Playlist component
      onRemove(game.id);
      console.log("Game removed successfully");
    } catch (error) {
      console.error("Error removing game from favourites:", error);
    }
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setGameStatus(newStatus);

    try {
      const response = await fetch(
        `http://localhost:5001/games/favourites/${game._id}`,
        {
          method: "PATCH", // Change this to PATCH
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Include the accessToken in the Authorization header
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update game status");
      }

      console.log("Game status updated successfully");
    } catch (error) {
      console.error("Error updating game status:", error);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentScreenshotIndex(
          (prevIndex) => (prevIndex + 1) % game.short_screenshots.length
        );
      }, 800); // Change screenshot every 2 seconds
    }
    return () => clearInterval(intervalId); // Cleanup on component unmount or hover end
  }, [isHovered, game.short_screenshots.length]);

  return (
    <div
      className={`p-5 relative rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full shadow-xl hover:shadow-lg hover:text-white ${
        isHovered ? "shadow-lg" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          isHovered
            ? game.short_screenshots[currentScreenshotIndex].image
            : game.background_image
        }
        alt={game.name}
        className="w-full h-50 object-cover rounded-md"
      />
      <div className="mt-2 text-left">
        <h2 className="text-[20px] text-violet-800 font-semibold">
          {game.name}
        </h2>
        <p className="text-[15px] font-semibold mt-2 text-black">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <div className="text-[12px] text-left text-violet-800 font-light mt-2">
          {truncatedPlatformStr}
        </div>
        <select
          value={gameStatus}
          onChange={handleStatusChange}
          className="border border-gray-300 rounded-md p-2 mt-2"
        >
          {gameStatusOptions.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          className="bg-whitesmoke hover:bg-violet-800 hover:text-white text-violet-800 rounded-full font-bold py-1 px-3 rounded"
          onClick={handleRemoveGame}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default FavouriteCard;
