// GameCard.jsx
import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>
        Platforms:{" "}
        {game.parent_platforms
          .map((platform) => platform.platform.name)
          .join(", ")}
      </p>
      <div className="screenshots">
        {game.short_screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt={`Screenshot ${screenshot.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCard;
