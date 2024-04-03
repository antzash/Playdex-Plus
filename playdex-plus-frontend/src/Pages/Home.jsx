import React from "react";
import GenreList from "../Components/GenreList";
// Assuming you have a GameList component similar to GenreList
import GameList from "../Components/GameList";

const Home = () => {
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
};

export default Home;
