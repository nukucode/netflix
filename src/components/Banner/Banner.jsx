import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import NetflixIcon from "../../assets/icon-netflix.png";

function Banner({ fetch }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(
      fetch.data?.results[
        Math.floor(Math.random() * fetch.data?.results.length - 1)
      ]
    );
  }, [fetch]);

  console.log(movie);

  const firstyear = new Date(movie?.release_date);

  function truncate(string, num = 25) {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-info">
        <div className="netflix-show">
          <img src={NetflixIcon} alt="Netflix-logo" />
          <span>Show</span>
        </div>
        <h3 className="banner-title">
          {truncate(movie?.title) ||
            truncate(movie?.name) ||
            truncate(movie?.original_name)}
        </h3>

        <div className="buttons">
          <Link className="play-button btn" to={`/details/movie/${movie?.id}`}>
            <PlayIcon className="button-icon" />
            <span>Play</span>
          </Link>
          <button className="info-button btn">
            <ExclamationCircleIcon className="button-icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>

      <div className="fade__button"></div>
    </div>
  );
}

export default Banner;
