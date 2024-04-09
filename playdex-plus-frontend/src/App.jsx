// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Playlist from "./Pages/Playlist";
import UserContext from "./context/user";
import { useState } from "react";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import FriendsPlaylist from "./Pages/FriendsPlaylist";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(true); // toggle to regisration page

  return (
    <>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, role, setRole }}
      >
        {accessToken.length > 0 && (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route
                path="/friends-playlist/:username"
                element={<FriendsPlaylist />}
              />{" "}
            </Routes>
          </Router>
        )}
        {accessToken.length === 0 && showLogin && (
          <Login setShowLogin={setShowLogin}></Login>
        )}
        {accessToken.length === 0 && !showLogin && (
          <Registration setShowLogin={setShowLogin}></Registration>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
