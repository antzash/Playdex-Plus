// src/Pages/Playlist.jsx
import React, { useState, useEffect } from "react";

import Header from "../Components/Header";

function Playlist() {
  return (
    <div>
      <Header />
      <h1 className="text-[30px] text-violet-800 font-bold text-left mt-10">
        Your Playlist
      </h1>
    </div>
  );
}

export default Playlist;
