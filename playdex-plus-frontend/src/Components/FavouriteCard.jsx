// src/Components/FavouriteCard.jsx
import React, { useState, useEffect, useContext } from "react";
import { FaMinus } from "react-icons/fa";
import UserContext from "../context/user"; // Import UserContext

const FavouriteCard = ({ game, onRemove }) => {
  const { accessToken } = useContext(UserContext); // Access the accessToken from UserContext
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState("Not Bought");

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

  const updateGameStatus = async (gameId, status) => {
    try {
      const response = await fetch(`/api/games/${gameId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    if (game.id) {
      updateGameStatus(game.id, gameStatus);
    }
  }, [gameStatus]);

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
        <p className="text-[13px] font-light mt-2 text-violet-800">
          {game.parent_platforms
            .map((platform) => platform.platform.name)
            .join(", ")}
        </p>
        <select
          value={gameStatus}
          onChange={(e) => setGameStatus(e.target.value)}
          className="bg-violet-800 text-white hover:bg-whitesmoke hover:text-violet rounded-full font-bold py-2 px-2 mt-4"
        >
          {gameStatusOptions.map((status) => (
            <option key={status} value={status}>
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
