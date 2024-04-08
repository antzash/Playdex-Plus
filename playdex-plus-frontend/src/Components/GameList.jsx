// GameList.jsx
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

function GameList({ searchTerm }) {
  const [selectedGenre, setSelectedGenre] = useState("All"); // State for selected genre
  const [selectedPlatform, setSelectedPlatform] = useState("All"); // State for selected platform
  const [gamesToDisplay, setGamesToDisplay] = useState([]);
  const [sortOption, setSortOption] = useState("default"); // Default sort option
  const [gameData, setGameData] = useState([]);

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

  const sortGames = (games) => {
    let sortedGames = [...games];

    if (sortOption === "A-Z") {
      sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Z-A") {
      sortedGames.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "Release (asc)") {
      sortedGames.sort((a, b) => new Date(a.released) - new Date(b.released));
    } else if (sortOption === "Release (desc)") {
      sortedGames.sort((a, b) => new Date(b.released) - new Date(a.released));
    }

    return sortedGames;
  };

  useEffect(() => {
    // Fetch all games when the component mounts or when the genre, platform, or searchTerm changes
    fetch("http://localhost:5001/games/game_info")
      .then((response) => response.json())
      .then((data) => {
        let games = data;
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
        if (searchTerm) {
          games = games.filter(
            (game) =>
              game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              game.tags.some((tag) =>
                tag.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
          );
        }
        // Apply sorting if not "default"
        if (sortOption !== "default") {
          games = sortGames(games);
        }
        setGamesToDisplay(games);
      })
      .catch((error) => console.error("Error fetching games:", error));
  }, [searchTerm, selectedGenre, selectedPlatform, sortOption]);

  return (
    <div>
      <div className="flex items-center mb-4">
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
        {/* Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-md p-2 ml-2"
        >
          <option value="default">Sort By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Release (asc)">Release (asc)</option>
          <option value="Release (desc)">Release (desc)</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {gamesToDisplay.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}

export default GameList;
