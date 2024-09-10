import React, { useState } from "react";
import "./loader.css";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

function Nav() {
  const [query, setquery] = useState("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setOpen(true);
    setquery(e.target.value);
  };

  return (
    <header className="flex items-center justify-between flex-wrap mx-auto px-8 py-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between space-x-3">
        {/* Navbar logo */}
        <a href="/" className="w-[111px] h-6.5">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix"
            className="w-full h-full"
          />
        </a>
        {/* Navbar list */}
        <ul className="font-medium flex-col md:flex-row text-white flex items-center justify-between flex-wrap space-x-4">
          <li>
            <span className="nav-text">Start</span>
          </li>
          <li>
            <span className="nav-link-text">Shows</span>
          </li>
          <li>
            <span className="nav-link-text">Movies</span>
          </li>
          <li>
            <span className="nav-link-text">New</span>
          </li>
          <li>
            <span className="nav-link-text">My List</span>
          </li>
        </ul>
      </nav>
      {/* Right Side Buttons */}
      <div className="flex items-center justify-between space-x-6">
        {/* Search Icon */}
        <button>
          <MagnifyingGlassIcon className="h-[24px] w-[24px] text-white" />
        </button>
        {/* Notification Icon */}
        <button>
          <BellIcon className="h-[24px] w-[24px] text-white" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
