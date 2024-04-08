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
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Playlist Name"
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CustomPlaylist;
