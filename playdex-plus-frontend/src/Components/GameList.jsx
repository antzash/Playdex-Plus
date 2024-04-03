import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

export default function GameList() {
  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = () => {
    GlobalApi.getAllGames()
      .then((resp) => {
        console.log(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  return <div>GameList Component</div>;
}
