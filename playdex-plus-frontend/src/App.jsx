import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 class="text-3xl underline font-bold text-green-500 flex items-center justify-center h-screen">
          Hello world!
        </h1>
      </div>
    </>
  );
}

export default App;
