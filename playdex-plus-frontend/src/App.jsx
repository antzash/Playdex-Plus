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

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(true); // toggle to registration page

  return (
    <Router>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, role, setRole }}
      >
        <Routes>
          <Route
            path="/"
            element={
              accessToken.length > 0 ? (
                <Home />
              ) : (
                <Login setShowLogin={setShowLogin} />
              )
            }
          />
          <Route path="/playlist" element={<Playlist />} />
          <Route
            path="/login"
            element={<Login setShowLogin={setShowLogin} />}
          />
          <Route
            path="/register"
            element={<Registration setShowLogin={setShowLogin} />}
          />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
