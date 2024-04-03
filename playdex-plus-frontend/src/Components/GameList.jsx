import React, { useEffect } from "react";

function GameList({ gameList }) {
  useEffect(() => {
    console.log("GameList:", gameList);
  });
  return <div>GameList Component</div>;
}

export default GameList;
