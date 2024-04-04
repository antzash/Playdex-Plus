// GameList.jsx
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import gameData from "../assets/gameData.json";

function GameList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesToDisplay, setGamesToDisplay] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All"); // State for selected genre
  const [selectedPlatform, setSelectedPlatform] = useState("All"); // State for selected platform

  // Function to handle genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing genre
    setGamesToDisplay([]); // Clear the current list of games
  };

  // Function to handle platform selection
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing platform
    setGamesToDisplay([]); // Clear the current list of games
  };

  useEffect(() => {
    // Load the first 30 games when the component mounts or when the genre or platform changes
    if (currentPage === 1) {
      const startIndex = 0;
      const endIndex = 30;
      let games = gameData.slice(startIndex, endIndex);
      if (selectedGenre !== "All") {
        games = games.filter((game) =>
          game.genres.some((genre) => genre.name === selectedGenre)
        );
      }
      if (selectedPlatform !== "All") {
        games = games.filter((game) =>
          game.parent_platforms.some(
            (platform) => platform.platform.name === selectedPlatform
          )
        );
      }
      setGamesToDisplay(games);
    }
  }, [currentPage, selectedGenre, selectedPlatform]);
  const loadMoreGames = () => {
    // Calculate the start index for the next set of games
    const startIndex = gamesToDisplay.length;
    const endIndex = startIndex + 30;
    let newGames = gameData.slice(startIndex, endIndex);

    // Apply filters to the new set of games before appending them
    newGames = applyFilters(newGames);

    // Check if there are any new games after applying filters
    if (newGames.length > 0) {
      setGamesToDisplay([...gamesToDisplay, ...newGames]);
    }
  };

  return (
    <div>
      <div className="flex j items-center mb-4">
        {/* Genres Dropdown */}
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="border border-gray-300 rounded-md p-2 mr-2"
        >
          <option value="All">All Genres</option>
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
        {/* Platforms Dropdown */}
        <select
          value={selectedPlatform}
          onChange={handlePlatformChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="All">All Platforms</option>
          {[
            ...new Set(
              gameData.flatMap((game) =>
                game.parent_platforms.map((platform) => platform.platform.name)
              )
            ),
          ].map((platform) => (
            <option key={platform} value={platform}>
              {platform}
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
