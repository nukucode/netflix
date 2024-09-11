import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Nav from "./Nav";

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

  function truncate(string, num) {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  }

  return (
    <div
      className="min-h-[810px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <Nav />
      {/* Banner Text */}
      <div className="absolute bottom-[200px] sm:bottom-[190px] left-[25px] sm:left-[64px] space-y-5">
        <div className="flex items-center space-x-3">
          <div className=" w-[18px] h-[31px]">
            <img
              src="https://pngimg.com/d/netflix_PNG15.png"
              alt="Netflix-icon"
            />
          </div>
          <span className="font-montserrat font-semibold text-white text-[16px]">
            Show
          </span>
        </div>
        {/* Title */}
        <div className="banner__info">
          <h3 className="font-montserrat font-bold text-5xl text-white">
            {movie?.title || movie?.name || movie?.original_name}
          </h3>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link to={`/details/movie/${movie?.id}`}>
            <button className="bg-white btn">
              <PlayIcon className="h-[24px]" />
              <span className="text-[14px] font-semibold">Play</span>
            </button>
          </Link>
          <button className="btn bg-white/25">
            <ExclamationCircleIcon className="h-[24px]" />
            <span className="text-[14px] font-semibold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
