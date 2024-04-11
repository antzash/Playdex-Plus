// Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import GameList from "../Components/GameList";
import Banner from "../Components/Banner";
import gameData from "../assets/gameData.json";
import Sidebar from "../Components/Sidebar";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentGame, setCurrentGame] = useState(gameData[0]); // Start with the first game

  function handleSearchInput(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
    }
  }

  // Function to select a random game from gameData
  function selectRandomGame() {
    const randomIndex = Math.floor(Math.random() * gameData.length);
    setCurrentGame(gameData[randomIndex]);
  }

  // Set up a timer to change the game every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      selectRandomGame();
    }, 3000); //

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Header
          searchTerm={searchTerm}
          handleSearchInput={handleSearchInput}
          handleSearch={handleSearch}
        />
      </div>
      <Banner game={currentGame} />{" "}
      {/* Display the current game in the banner */}
      <div className="flex w-full">
        <div className="w-3/4">
          <GameList
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
            handleSearch={handleSearch}
          />
        </div>
        <div className="w-1/4 text-right p-10 mt-10 ml-10 shadow-lg">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
