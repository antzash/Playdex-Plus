import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import gameData from "../assets/gameData.json";

function GameList() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedSort, setSelectedSort] = useState("None");
  const [gamesToDisplay, setGamesToDisplay] = useState([]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setGamesToDisplay([]);
  };

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    setGamesToDisplay([]);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    setGamesToDisplay([]);
  };

  useEffect(() => {
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
    switch (selectedSort) {
      case "AlphabeticallyAsc":
        games.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "AlphabeticallyDesc":
        games.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "ReleaseDateAsc":
        games.sort((a, b) => new Date(a.released) - new Date(b.released));
        break;
      case "ReleaseDateDesc":
        games.sort((a, b) => new Date(b.released) - new Date(a.released));
        break;
      default:
        break;
    }
    setGamesToDisplay(games);
  }, [selectedGenre, selectedPlatform, selectedSort]);

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
          className="border border-gray-300 rounded-md p-2 mr-2"
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
        {/* Sort Dropdown */}
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md p-2 ml-2"
        >
          <option value="None">Sort By</option>
          <option value="AlphabeticallyAsc">Alphabetically (Asc)</option>
          <option value="AlphabeticallyDesc">Alphabetically (Desc)</option>
          <option value="ReleaseDateAsc">Release Date (Asc)</option>
          <option value="ReleaseDateDesc">Release Date (Desc)</option>
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
