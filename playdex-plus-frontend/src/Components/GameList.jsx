// GameList.jsx
import React from "react";
import GameCard from "./GameCard"; // Adjust the import path as necessary
import gameData from "../assets/gameData.json";

function GameList() {
  return (
    <div>
      {gameData.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
}

export default GameList;
