// UserSidebar.jsx
import React from "react";

const Sidebar = () => {
  const users = [
    { username: "Anthony" },
    { username: "Lek Ee" },
    { username: "Eremus" },
  ];

  return (
    <div className="w-1/4 mt-10 text-align-right">
      <h2 className="text-xl font-bold mb-4">Other Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
