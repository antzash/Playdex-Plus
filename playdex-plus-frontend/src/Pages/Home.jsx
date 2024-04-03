import React from "react";
import GameList from "../Components/GameList";

const Home = () => {
  return (
    <div>
      <div className="bg-red-400">Genre List</div>
      <br />
      <div className="bg-violet-300">
        <GameList />
      </div>
    </div>
  );
};

export default Home;
