// GameList.jsx
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import gameData from "../assets/gameData.json";

function GameList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesToDisplay, setGamesToDisplay] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All"); // State for selected genre

  // Function to handle genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing genre
    setGamesToDisplay([]); // Clear the current list of games
  };

  useEffect(() => {
    // Load the first 30 games when the component mounts or when the genre changes
    if (currentPage === 1) {
      const startIndex = 0;
      const endIndex = 30;
      let games = gameData.slice(startIndex, endIndex);
      if (selectedGenre !== "All") {
        games = games.filter((game) =>
          game.genres.some((genre) => genre.name === selectedGenre)
        );
      }
      setGamesToDisplay(games);
    }
  }, [currentPage, selectedGenre]);

  const loadMoreGames = () => {
    // Calculate the start index for the next set of games
    const startIndex = gamesToDisplay.length;
    const endIndex = startIndex + 30;
    let newGames = gameData.slice(startIndex, endIndex);
    if (selectedGenre !== "All") {
      newGames = newGames.filter((game) =>
        game.genres.some((genre) => genre.name === selectedGenre)
      );
    }

    // Append the new games to the current list
    setGamesToDisplay([...gamesToDisplay, ...newGames]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All Genres</option>
          {/* Assuming genres are unique and can be extracted from gameData */}
          {[
            ...new Set(
              gameData.flatMap((game) => game.genres.map((genre) => genre.name))
            ),
          ].map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
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
