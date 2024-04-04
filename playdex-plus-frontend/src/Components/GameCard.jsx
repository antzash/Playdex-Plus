// GameCard.jsx
import React from "react";

const GameCard = ({ game }) => {
  // Assuming platformStr is a string that contains the platforms
  const platformStr = game.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  // Map over the genres array to create a string of genre names
  const genreStr = game.genres.map((genre) => genre.name).join(", ");

  return (
    <div
      key={game.id}
      className="relative rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full"
    >
      <div>
        <img
          src={game.background_image}
          alt={game.name}
          className="lazy h-[200px] w-[250px] rounded-xl object-cover"
          loading="lazy"
        />
        <h2 className="text-[16px] mt-2 text-left text-violet-800 font-bold">
          {game.name}
        </h2>
      </div>
      <div className="text-[12px] text-left text-black font-bold">
        {genreStr}
      </div>
      <div className="text-[10px] text-left text-black font-light p-1">
        {platformStr}
      </div>
    </div>
  );
};

export default GameCard;
