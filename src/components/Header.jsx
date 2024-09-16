import React, { useEffect, useState } from "react";
import "./loader.css";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [headerColor, setheaderColor] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // scroll event listener
  const listenScrollEvent = () => {
    if (window.screenY > 73) {
      setheaderColor(true);
    } else {
      setheaderColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[999] flex items-center justify-between flex-wrap mx-auto px-8 py-4 ${
        headerColor ? "bg-black/50" : "bg-transparent"
      }`}
    >
      <a href="/" className="w-[100px] h-6.5 flex items-center space-x-3">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix"
          className="w-full h-full"
        />
        <div className="bg-white px-2 py-[2px] rounded-md">
          <span className="text-black font-bold uppercase">Clone</span>
        </div>
      </a>

      {/* Right Side Buttons */}
      <div className="flex items-center justify-between space-x-6">
        {/* SearchBar */}
        <form
          onSubmit={(e) => navigate(`search/${query}`)}
          className="hidden sm:flex max-w-sm h-[33px] mx-auto border border-white items-center px-2"
        >
          <MagnifyingGlassIcon className="h-[20px] icon" />
          <input
            type="search"
            value={query}
            placeholder="Search Movies"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-full px-1 bg-transparent border-none outline-none text-white"
          />
        </form>
        {/* Notification Icon */}
        <button>
          <BellIcon className="h-[24px] w-[24px] icon" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
