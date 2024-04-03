import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
// Assuming you have a GameList component similar to GenreList
import GameList from "../Components/GameList";
import GlobalApi from "../Services/GlobalApi";

function Home() {
  const [allGamesList, setAllGamesList] = useState([]); // to store list of all games
  const [gamesListbyGenres, setGamesListbyGenres] = useState([]); // store list of games filtered by genre

  useEffect(() => {
    getAllGamesList(); // fetch all games
    getGameListbyGenreId();
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      console.log(resp.data.results);
      setGamesListbyGenres(resp.data.results);
    });
  };

  // Function to fetch games by genre ID and update gamesListbyGenres
  const getGameListbyGenreId = (id) => {
    GlobalApi.getGamesbyGenreID(4).then((resp) => {
      console.log("Games By Genre:", resp.data.results);
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <GenreList />
      </div>
      <div className="w-3/4">
        <GameList gameList={gamesListbyGenres} />
      </div>
    </div>
  );
}

export default Home;
