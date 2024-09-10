import React, { useState, useEffect } from "react";
import "./Row.css";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetch }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);
  console.log(movies)

  return (
    <>
      <div className="row">
        <h3>{title}</h3>

        <div className="list">
          {movies?.map((data) => (
            <Link
              to={`/details/${"movie" || "tv"}/${data.id}`}
              key={data.id}
              className="link"
            >
              <img
                className="bigPoster"
                key={data.id}
                src={`${base_url}${data.poster_path}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
