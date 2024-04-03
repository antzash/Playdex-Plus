import React from "react";
import GenreList from "../Components/GenreList";

const Home = () => {
  return (
    <div>
      <div className="bg-red-400">
        <GenreList />
      </div>
      <br />
      <div className="bg-violet-300"></div>
    </div>
  );
};

export default Home;
