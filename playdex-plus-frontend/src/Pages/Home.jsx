import React, { useEffect, useState } from "react";
// import GlobalApi from "../Services/GlobalApi";
import Header from "../Components/Header";
import GameList from "../Components/GameList";
import gameData from "../assets/gameData.json";
import Sidebar from "../Components/Sidebar";

function Home() {
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   GlobalApi.getAllGames().then((fetchedGames) => {
  //     setGames(fetchedGames);
  //   });
  // }, []);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchInput(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      const filteredGames = gameData.filter(
        (game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.tags.some((tag) =>
            tag.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      console.log(filteredGames);
      // Here you would update the game list to reflect the search results
    }
  }

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Header
          searchTerm={searchTerm}
          handleSearchInput={handleSearchInput}
          handleSearch={handleSearch}
        />
      </div>
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
