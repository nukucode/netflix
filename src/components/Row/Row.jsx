import React, { useState, useEffect } from "react";
import "./Row.css";
import { Link } from "react-router-dom";
import Label from "../Label/Label";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetch, type, isRepeat }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);
  console.log(movies);

  return (
    <>
      <div className="row">
        <Label title={title} />
        <div
          className="list"
          style={{
            gap: isRepeat ? "0px" : null,
          }}
        >
          {movies?.map((data) => (
            <Link
              to={`/details/${type}/${data.id}`}
              key={data.id}
              className={isRepeat ? "watch" : "link"}
            >
              <img
                className={isRepeat ? "img-watch" : "imgPoster"}
                key={data.id}
                src={
                  !isRepeat
                    ? `${base_url}${data.poster_path}`
                    : `${base_url}${data.backdrop_path}`
                }
                alt={data.title}
              />

            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
