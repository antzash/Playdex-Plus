import React, { useEffect, useState } from "react";
// import GlobalApi from "../Services/GlobalApi";
import GameList from "../Components/GameList";

function Home() {
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   GlobalApi.getAllGames().then((fetchedGames) => {
  //     setGames(fetchedGames);
  //   });
  // }, []);

  return (
    <div className="flex">
      <div className="text-right w-3/4 mt-10">
        <GameList />
      </div>
    </div>
  );
}

export default Home;
