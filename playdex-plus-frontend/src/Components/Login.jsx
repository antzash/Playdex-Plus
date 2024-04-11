import React from "react";
import { useContext } from "react";
import UserContext from "../context/user";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/Images/logo.png";

const Login = (props) => {
  const fetchData = useFetch();

  const userCtx = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetchData("/auth/login", "POST", { username, password });
    console.log(res);
    if (res.ok) {
      userCtx.setAccessToken(res.data.access);
      const decoded = jwtDecode(res.data.access);
      userCtx.setRole(decoded.role);
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-whitesmoke">
        <img src={logo} alt="Logo" className="mb-10 w-[500px] h-[150px]" />{" "}
        {/* Display the logo */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
                className="bg-whitesmoke hover:bg-violet-800 text-violet-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                href="#"
                onClick={() => props.setShowLogin(false)}
              >
                Go to registration screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
