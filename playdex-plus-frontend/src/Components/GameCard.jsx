// GameCard.jsx
import React from "react";

const GameCard = ({ game }) => {
  // Assuming platformStr is a string that contains the platforms
  const platformStr = game.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  return (
    <div
      key={game.id}
      className="relative rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full"
    >
      <div>
        <img
          src={game.background_image}
          alt={game.name}
          className="lazy h-[200px] w-full rounded-xl object-cover"
          loading="lazy"
        />
        <h2 className="text-[16px] text-left text-violet-800 font-bold p-2">
          {game.name}
        </h2>
      </div>
      <div className="text-[10px] text-left text-black font-light p-2">
        {platformStr}
      </div>
    </div>
  );
};

export default GameCard;
