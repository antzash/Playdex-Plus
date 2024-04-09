import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import logo from "../assets/Images/logo.png"; // Import the logo

const Registration = (props) => {
  const fetchData = useFetch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const res = await fetchData("/auth/register", "PUT", {
      username,
      password,
    });

    if (res.ok) {
      setUsername("");
      setPassword("");
      alert("User successfully registered! Try logging in now.");
      props.setShowLogin(true);
    } else {
      console.log(res.data);
      alert("Registration failed. Errors encountered: \n" + res.data);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={logo} alt="Logo" className="mb-10 w-[500px] h-[150px]" />{" "}
        {/* Display the logo */}
        <div className="w-full max-w-md">
          <div className="bg-whitesmoke rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-violet-800 text-xl font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-violet-800 text-xl font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-white hover:bg-violet-800 text-violet-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={registerUser}
              >
                Register
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                href="#"
                onClick={() => props.setShowLogin(true)}
              >
                Go to login screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
