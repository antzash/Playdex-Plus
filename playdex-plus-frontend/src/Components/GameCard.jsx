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
      className="relative bg-green-600 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full"
    >
      <div>
        <img
          src={game.background_image}
          alt={game.name}
          className="lazy h-[200px] w-full rounded-t-lg object-cover bg-green-900"
          loading="lazy"
        />
        <h2 className="text-[20px] text-black font-bold p-2">{game.name}</h2>
      </div>
      <div className="text-[10px] text-white font-light p-2">{platformStr}</div>
    </div>
  );
};

export default GameCard;
