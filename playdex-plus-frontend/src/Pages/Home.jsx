import React, { useEffect, useState } from "react";

// Assuming you have a GameList component similar to GenreList

import GlobalApi from "../Services/GlobalApi";

function Home() {
  return (
    <div className="flex">
      <div className="w-1/4"></div>
      <div className="w-3/4"></div>
    </div>
  );
}

export default Home;
