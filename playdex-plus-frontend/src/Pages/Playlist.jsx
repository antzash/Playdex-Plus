// src/Pages/Playlist.jsx
import React, { useState, useEffect } from "react";
import FavouriteCard from "../Components/FavouriteCard"; // Import the FavouriteCard component

import Header from "../Components/Header";

function Playlist() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch("http://localhost:5001/games/favourites"); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const games = await response.json();
        setFavourites(games);
        console.log(games);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-[30px] text-violet-800 font-bold text-left mt-10">
        Your Playlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favourites.map((game) => (
          <FavouriteCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
