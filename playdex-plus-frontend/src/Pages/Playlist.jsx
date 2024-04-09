// src/Pages/Playlist.jsx
import React, { useState, useEffect, useContext } from "react";
import FavouriteCard from "../Components/FavouriteCard";
import Header from "../Components/Header";
import { jwtDecode } from "jwt-decode";
import UserContext from "../context/user"; // Import UserContext

function Playlist() {
  const [favourites, setFavourites] = useState([]);
  const { accessToken } = useContext(UserContext); // Access the accessToken from UserContext
  const decoded = jwtDecode(accessToken); // Decode the JWT token to get the username
  const username = decoded.username; // Extract the username from the decoded token

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch("http://localhost:5001/games/favourites", {
          method: "POST", // Change to POST to send a request body
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }), // Include the username in the request body
        });
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
  }, [username]); // Add username as a dependency to refetch when it changes

  const removeGameFromList = (gameId) => {
    setFavourites(favourites.filter((game) => game.id !== gameId));
  };

  // Function to decode JWT and get the username
  const getUsernameFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      return decoded.username;
    } catch (error) {
      console.error("There was a problem decoding the token:", error);
      return null;
    }
  };

  const filteredFavourites = favourites.filter(
    (game) => game.username === getUsernameFromToken()
  );

  return (
    <div>
      <Header />
      <h1 className="text-[30px] text-violet-800 font-bold text-left mt-10">
        Your Playlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favourites.map((game) => (
          <FavouriteCard
            key={game.id}
            game={game}
            onRemove={removeGameFromList}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
