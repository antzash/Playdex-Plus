// src/Pages/Playlist.jsx
import React, { useState, useEffect } from "react";
import CustomPlaylist from "../Components/CustomPlaylist";
import Header from "../Components/Header";
function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  useEffect(() => {
    // Load playlists from local storage when the component mounts
    const savedPlaylists = localStorage.getItem("playlists");
    if (savedPlaylists) {
      setPlaylists(JSON.parse(savedPlaylists));
    }
  }, []);

  const handleUpdatePlaylist = (id, name) => {
    // Update the playlist in the state
    const updatedPlaylists = playlists.map((playlist) =>
      playlist.id === id ? { ...playlist, name } : playlist
    );
    setPlaylists(updatedPlaylists);
    // Save the updated playlists to local storage
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  const handleDeletePlaylist = (id) => {
    // Delete the playlist from the state
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(updatedPlaylists);
    // Save the updated playlists to local storage
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  const handleAddPlaylist = (e) => {
    e.preventDefault();
    if (newPlaylistName.trim() === "") return;

    const newPlaylist = {
      id: Date.now(), // Simple ID generation, consider using a library like uuid
      name: newPlaylistName,
    };

    setPlaylists([...playlists, newPlaylist]);
    localStorage.setItem(
      "playlists",
      JSON.stringify([...playlists, newPlaylist])
    );
    setNewPlaylistName("");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleAddPlaylist} className="mb-5 w-full max-w-md">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            placeholder="New Playlist Name"
            className="flex-grow p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Playlist
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 gap-4">
        {playlists.map((playlist, index) => (
          <CustomPlaylist
            key={index}
            playlist={playlist}
            onUpdate={handleUpdatePlaylist}
            onDelete={handleDeletePlaylist}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
