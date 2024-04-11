// Banner.jsx
import React from "react";

function Banner({ game }) {
  return (
    <div className="relative rounded-lg overflow-hidden mb-10">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-[400px] object-cover mt-10 rounded-xl"
      />

      <div className="absolute inset-0"></div>

      <div className="absolute bottom-0 right-0 mb-5 mr-5 bg-gradient-to-t from-violet-800 to-transparent text-white p-2 rounded-lg">
        <h2 className="text-2xl font-bold">{game.name}</h2>
      </div>
    </div>
  );
}

export default Banner;
