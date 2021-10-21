import { useState } from "react";

import CardList from "./components/CardList";
import userContext from "./components/userContext";

function App() {
  const [activeTimer, setActiveTimer] = useState(false);

  return (
    <userContext.Provider value={{ activeTimer, setActiveTimer }}>
      <div className="px-10 md:px-20 min-h-100">
        <h1 className="text-4xl md:text-7xl mt-10 mb-5 md:px-20 text-white font-bold text-center">
          produc<span className="text-green-200">ti.me</span>
        </h1>
        <h2 className="text-center text-gray-200 font-thin text-md mb-10 mt-6">
          One task at a time. Free &amp; Open Source.
        </h2>
        <CardList />
        <div className="relative bottom-0 text-center font-thin text-sm text-white pt-40 pb-10">
          with 💖 by{" "}
          <a
            href="https://github.com/elenalape"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300"
          >
            @elenalape
          </a>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
