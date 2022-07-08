import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";
import "./Search.css";
import {Link} from 'react-router-dom'

const API_KEY = "e41e10a70ecb26587607640ae2112868";
const base_url = "https://image.tmdb.org/t/p/original";

function Search({ query, letGo }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${API_KEY}&page=1`
      )
        .then((res) => res.json())
        .then((data) => setData(data.results));
    }
  }, [query]);

  return (
    <div className="search">
      <div className="lists">
        {data.map((data) => (
      
            <Link className="box" key={data.id} to={`/details/movie/${data.id}`}><img className="bigb" src={`${base_url}${data?.poster_path || data?.backdrop_path}`} /></Link>
          
        ))}
      </div>
    </div>
  );
}

export default Search;
