// GameList.jsx
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import gameData from "../assets/gameData.json";

function GameList() {
  const [selectedGenre, setSelectedGenre] = useState("All"); // State for selected genre
  const [selectedPlatform, setSelectedPlatform] = useState("All"); // State for selected platform
  const [gamesToDisplay, setGamesToDisplay] = useState([]);

  // Function to handle genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setGamesToDisplay([]); // Clear the current list of games
  };

  // Function to handle platform selection
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    setGamesToDisplay([]); // Clear the current list of games
  };

  useEffect(() => {
    // Load all games when the component mounts or when the genre or platform changes
    let games = gameData;
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
  }, [selectedGenre, selectedPlatform]);

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
    </div>
  );
}

export default GameList;
