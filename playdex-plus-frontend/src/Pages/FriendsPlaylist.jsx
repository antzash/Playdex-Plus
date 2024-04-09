// src/Pages/FriendsPlaylist.jsx
import React, { useState, useEffect, useContext } from "react";
import Header from "../Components/Header";
import FavouriteCard from "../Components/FavouriteCard";
import { useParams } from "react-router-dom";
import UserContext from "../context/user";

function FriendsPlaylist() {
  const { username } = useParams(); // Get the username from the URL parameters
  const [favourites, setFavourites] = useState([]);
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/games/favourites?username=${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const games = await response.json();
        setFavourites(games);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchFavourites();
  }, [username, accessToken]);

  return (
    <div>
      <Header />
      <h1 className="text-[30px] text-violet-800 font-bold text-left mt-10">
        {username}'s Playlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favourites.map((game) => (
          <FavouriteCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default FriendsPlaylist;
