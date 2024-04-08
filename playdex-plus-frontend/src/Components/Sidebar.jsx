import React from "react";

function Sidebar() {
  const users = [
    { username: "Anthony" },
    { username: "Lek Ee" },
    { username: "Eremus" },
  ];

  return (
    <div>
      <h2 className="text-[30px] text-violet-800 font-bold mb-4">
        Other Users
      </h2>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="mb-2 cursor-pointer hover:bg-violet-200 p-2 rounded-full"
          >
            <a href="#" className="text-[20px]">
              {user.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
