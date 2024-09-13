import React, { useState } from "react";
import "./loader.css";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { getQuery } from "../features/searchSlice";
import { useDispatch } from "react-redux";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  // Menubar Open Function
  const handleMenu = () => {
    setOpenMenu(true);
  };

  // Menubar Close Function
  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <header className="flex items-center justify-between flex-wrap mx-auto px-8 py-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between space-x-0 md:space-x-4">
        {/* Navbar logo */}
        <a href="/" className="w-[111px] h-6.5">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix"
            className="w-full h-full"
          />
        </a>
        {/* Navbar list */}
        <ul
          className={`flex-col md:flex-row space-x-4 text-white flex items-center justify-between flex-wrap md:relative md:bg-none absolute top-0 left-0 h-auto w-full z-[100] md:p-0 p-5 space-y-3 md:space-y-0 ${
            openMenu ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to={"/start"} className="nav-link-text font-bold">
              Start
            </Link>
          </li>
          <li>
            <Link to={"/shows"} className="nav-link-text">
              Shows
            </Link>
          </li>
          <li>
            <Link to={"/movies"} className="nav-link-text">
              Movies
            </Link>
          </li>
          <li>
            <Link to={"/new"} className="nav-link-text">
              New
            </Link>
          </li>
          <li>
            <Link to={"/my-lists"} className="nav-link-text">
              My List
            </Link>
          </li>
          {/* Responsive Navbar Close Button */}
          {openMenu && (
            <button className="absolute cursor-pointer top-2 right-4 m-3">
              <XMarkIcon
                onClick={handleClose}
                className="h-[24px] w-[24px] text-white"
              />
            </button>
          )}
        </ul>
        {/* Background Layer For Navbar When User Open The Menu */}
        <div
          className={`absolute top-0 left-0 bg-black opacity-80 w-screen h-screen block md:hidden ${
            openMenu ? "block" : "hidden"
          }`}
        ></div>
      </nav>
      {/* Right Side Buttons */}
      <div className="flex items-center justify-between space-x-6">
        {/* SearchBar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-sm h-[33px] mx-auto border border-white flex items-center px-2"
        >
          <MagnifyingGlassIcon className="h-[20px] icon" />
          <input
            type="search"
            placeholder="Search Movies"
            onChange={(e) => dispatch(getQuery(e.target.value))}
            className="w-full h-full px-1 bg-transparent border-none outline-none text-white"
          />
        </form>
        {/* Search Icon */}
        <button>
          <MagnifyingGlassIcon className="h-[24px] icon" />
        </button>
        {/* Notification Icon */}
        <button>
          <BellIcon className="h-[24px] w-[24px] icon" />
        </button>
        <button onClick={handleMenu} className="inline-block md:hidden">
          <Bars3Icon className="h-[24px] icon" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
