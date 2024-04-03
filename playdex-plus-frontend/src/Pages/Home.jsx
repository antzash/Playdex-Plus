import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
// Assuming you have a GameList component similar to GenreList
import GameList from "../Components/GameList";
import GlobalApi from "../Services/GlobalApi";

function Home() {
  const [allGamesList, setAllGamesList] = useState([]); // to store list of all games

  useEffect(() => {
    getAllGamesList(); // fetch all games
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      console.log(resp.data.results);
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <GenreList />
      </div>
      <div className="w-3/4">
        <GameList />
      </div>
    </div>
  );
}

export default Home;
