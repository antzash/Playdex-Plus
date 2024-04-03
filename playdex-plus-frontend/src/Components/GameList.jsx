// GameList.jsx
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard"; // Adjust the import path as necessary
import gameData from "../assets/gameData.json"; // Adjust the import path as necessary

function GameList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesToDisplay, setGamesToDisplay] = useState([]);

  useEffect(() => {
    // Load the first 30 games when the component mounts
    if (currentPage === 1) {
      const startIndex = 0;
      const endIndex = 30;
      const games = gameData.slice(startIndex, endIndex);
      setGamesToDisplay(games);
    }
  }, [currentPage]);

  const loadMoreGames = () => {
    // Calculate the start index for the next set of games
    const startIndex = gamesToDisplay.length;
    const endIndex = startIndex + 30;
    const newGames = gameData.slice(startIndex, endIndex);

    // Append the new games to the current list
    setGamesToDisplay([...gamesToDisplay, ...newGames]);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {gamesToDisplay.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={loadMoreGames}
      >
        Load More Games
      </button>
    </div>
  );
}

export default GameList;
