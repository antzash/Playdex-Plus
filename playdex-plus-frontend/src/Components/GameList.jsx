import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

export default function GameList() {
  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = () => {
    GlobalApi.getAllGames()
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          console.log(data.results); // Log the games to the console
        }
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  return <div>GameList Component</div>;
}
