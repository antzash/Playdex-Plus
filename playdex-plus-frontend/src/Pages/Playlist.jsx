import React, { useState } from "react";
import GameCard from "../Components/GameCard";
import Header from "../Components/Header";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handlePlaylistNameChange = (event) => {
    setNewPlaylistName(event.target.value);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      setPlaylists([...playlists, { name: newPlaylistName, games: [] }]);
      setNewPlaylistName("");
    }
  };

  const handleDeletePlaylist = (playlistName) => {
    setPlaylists(
      playlists.filter((playlist) => playlist.name !== playlistName)
    );
  };
  return (
    <div>
      <Header />
      <div className="p-4">
        <input
          type="text"
          placeholder="New Playlist Name"
          value={newPlaylistName}
          onChange={handlePlaylistNameChange}
          className="border-2 border-gray-300 p-2 rounded-md w-full mb-4"
        />
        <button
          onClick={handleCreatePlaylist}
          className="bg-blue-500 text-white p-2 rounded-md mb-4"
        >
          Create Playlist
        </button>
        {playlists.map((playlist) => (
          <div
            key={playlist.name}
            className="mb-4 border-2 border-gray-300 p-4 rounded-md"
          >
            <h2 className="text-lg font-bold">{playlist.name}</h2>
            <button
              onClick={() => handleDeletePlaylist(playlist.name)}
              className="bg-red-500 text-white p-2 rounded-md mt-2"
            >
              Delete
            </button>
            {playlist.games.map((game) => (
              <GameCard key={game.id} game={game} playlists={playlists} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
