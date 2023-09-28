import React from "react";
import "./Header.css";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="netflix-logo"
            />
          </a>
        </div>
        {/* Nav Links */}
        <ul className="menu-items">
          <li className="nav-link active">
            <a href="#start">Start</a>
          </li>
          <li className="nav-link">
            <a href="#show">Shows</a>
          </li>
          <li className="nav-link">
            <a href="#movies">Movies</a>
          </li>
          <li className="nav-link">
            <a href="#new">New</a>
          </li>
          <li className="nav-link">
            <a href="#list">My List</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <button onClick={() => navigate("/search")}>
          <MagnifyingGlassIcon className="icon" />
        </button>
        <button>
          <BellIcon className="icon" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
