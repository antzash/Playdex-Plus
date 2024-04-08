// src/Components/CustomPlaylist.jsx
import React, { useState, useEffect } from "react";

function CustomPlaylist({ playlist, onUpdate, onDelete }) {
  const [name, setName] = useState(playlist.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate(playlist.id, name);
  };

  const handleDelete = () => {
    onDelete(playlist.id);
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Playlist Name"
        className="flex-grow p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default CustomPlaylist;
