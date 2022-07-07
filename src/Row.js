import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, isTop, fetch }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetch]);

  console.log(movies);
  return (
    <>
      <div className="row">
        <h3>{title}</h3>
       
        <div className="list">
          {movies.map((data) => (
            <img className="bigPoster" src={`${base_url}${data.poster_path}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
