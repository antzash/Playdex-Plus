// Banner.jsx
import React from "react";

function Banner({ game }) {
  return (
    <div className="banner">
      <img src={game.background_image} alt={game.name} />
      <h2>{game.name}</h2>
    </div>
  );
}

export default Banner;
