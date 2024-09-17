import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Loading from "./Loading";

function Banner({ useGetTrendingQuery }) {
  const [item, setItem] = useState([]);

  const { data, isLoading } = useGetTrendingQuery();

  useEffect(() => {
    setItem(
      data?.results[Math.floor(Math.random() * data?.results.length - 1)]
    );
  }, [data?.results]);

  // short overview
  const shortOverview = (text) => {
    if (text?.split("").length > 200) {
      return text?.split("").slice(0, 150).join("") + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`min-h-[810px] -mt-[4rem] backdrop-blur-sm`}
          style={{
            backgroundSize: "cover",
            backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-netflixColor">
            {/* Banner Text */}
            <div className="absolute bottom-[230px] sm:bottom-[220px] left-4 md:left-[65px] space-y-5">
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
                  {item?.title || item?.name || item?.original_name}
                </h3>

                <p className="text-white font-thin mt-3 max-w-[500px]">
                  {shortOverview(item?.overview)}
                </p>
              </div>
              {/* Buttons */}
              <div className="flex items-center space-x-4">
                <Link to={`/details/${item?.media_type}/${item?.id}`}>
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
        </div>
      )}
    </>
  );
}

export default Banner;
