// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import GameList from "./Components/GameList";
import Playlist from "./Pages/Playlist";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<GameList searchTerm={searchTerm} />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;
