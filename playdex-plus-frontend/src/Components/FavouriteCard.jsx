// src/Components/FavouriteCard.jsx
import React from "react";

const FavouriteCard = ({ game }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{game.name}</h2>
        <p className="text-sm text-gray-500">{game.description}</p>
      </div>
    </div>
  );
};

export default FavouriteCard;
