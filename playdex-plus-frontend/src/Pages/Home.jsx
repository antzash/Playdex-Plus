import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import GameList from "../Components/GameList";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    GlobalApi.getAllGames().then((fetchedGames) => {
      setGames(fetchedGames);
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-full">
        <GameList games={games} />
      </div>
    </div>
  );
}

export default Home;
