// FriendCard.jsx
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

const FriendCard = ({ game }) => {
  const { accessToken } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

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

  return (
    <div
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
          <div className="mt-2 text-center">
            <div className="inline-block rounded-full text-violet-800 mt-5 ">
              <p className="text-[20px] font-bold text-center">{game.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
