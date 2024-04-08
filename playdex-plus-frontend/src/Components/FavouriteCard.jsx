// src/Components/FavouriteCard.jsx
import React, { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";

const FavouriteCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
        <p className="text-[13px] font-light mt-2 text-violet-800">
          {game.parent_platforms
            .map((platform) => platform.platform.name)
            .join(", ")}
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="bg-whitesmoke hover:bg-violet-800 hover:text-white text-violet-800 rounded-full font-bold py-1 px-3 rounded">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default FavouriteCard;
