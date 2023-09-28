import React, { useEffect, useState } from "react";
import "./Trending.css";
import Label from "../Label/Label";
import { Link } from "react-router-dom";
import TrendingItem from "./TrendingItem";
const base_url = "https://image.tmdb.org/t/p/original";

function Trending({ title,type, fetch }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);
  console.log("trending", movies);

  return (
    <div className="trending-lists">
      <Label title={title} />
      <div className="list">
        {movies?.map((data, index) => (
          <TrendingItem
            index={index}
            id={data.id}
            src={`${base_url}${data.poster_path}`}
            alt={data.title}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
