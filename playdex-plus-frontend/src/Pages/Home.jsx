import React, { useEffect, useState } from "react";
// import GlobalApi from "../Services/GlobalApi";
import Header from "../Components/Header";
import GameList from "../Components/GameList";
import gameData from "../assets/gameData.json";

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
    <div>
      <Header
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
        handleSearch={handleSearch}
      />
      <div className="text-right w-3/4 mt-10">
        <GameList
          searchTerm={searchTerm}
          handleSearchInput={handleSearchInput}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
}

export default Home;
