// FriendCard.jsx
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

const FriendCard = ({ game }) => {
  const { accessToken } = useContext(UserContext);
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
        <h2 className="text-[16px] mt-2 text-left text-violet-800 font-bold">
          {game.name}
        </h2>
      </div>
    </div>
  );
};

export default FriendCard;
