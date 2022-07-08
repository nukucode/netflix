import React, { useState, useEffect } from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import Search from "./Search";

function Nav() {
  const [query, setquery] = useState("");
  const [open, setOpen] = useState(false);

  console.log(query);

  const search = () => {
    setOpen(true);
  }

  

  const results = (e) => {
    e.preventDefault();

  }


  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix"
        />
      </div>
      <form className={open ? 'search__show search__container' : 'search__container'} onSubmit={(e) => results(e)}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Try Thor or Spider-Man"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <strong className="pop"><CloseIcon onClick={ () => setOpen(false)} /></strong>
      </form>

      <div className="search__btn"  onClick={() => search()}><SearchIcon /></div>

      <div className={!open ? 'close' : 'close close__show'}>
       <Search query={query}  />
      </div>
    </div>
  );
}

export default Nav;
