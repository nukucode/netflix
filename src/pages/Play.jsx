import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery, useGetVideosQuery } from "../features/Api";
import { FilmIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

function Home() {
  const [textLength, setTextLength] = useState(150);
  const [showTrailer, setShowTrailer] = useState(false);
  const params = useParams();

  const videos = useGetVideosQuery(params);
  const { data, isLoading } = useGetByIdQuery(params);

  // from videos to find trailer
  const findTrailer = () => {
    const trailers = videos?.data?.results?.find(
      (trailer) => trailer.type === "Trailer" || "Opening Credits"
    );
    return trailers?.key;
  };

  // showOverview
  const showOverView = (text, length) => {
    if (text.length > length) {
      return `${text.slice(0, length)}`;
    } else {
      return text;
    }
  };

  return (
    <>
      {!isLoading ? (
        <section
          className="bg-cover bg-center object-contain"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        >
          <div className="relative h-screen">
            <Navigation />
            <div className="absolute bottom-[100px] left-[20px] sm:left-[64px] max-w-[500px]">
              <div className="bg-green w-fit p-2">
                <span className="text-white text-1rem font-montserrat font-bold">
                  {(data.vote_average * 10).toFixed(2)}%
                </span>
              </div>
              <h1 className=" my-7 text-[1.5rem] sm:text-[3.5rem] font-bold text-white leading-tight">
                {data.title || data.original_name || data.name}
              </h1>
              <p className="text-white">
                {showOverView(data.overview, textLength)}{" "}
                {data.overview.length > textLength ? (
                  <span
                    onClick={() => setTextLength(data.overview.length)}
                    className="text-green font-bold cursor-pointer"
                  >
                    More...
                  </span>
                ) : (
                  <span
                    onClick={() => setTextLength(150)}
                    className="text-green font-bold cursor-pointer"
                  >
                    Hide
                  </span>
                )}
              </p>
              <button
                onClick={() => setShowTrailer(!showTrailer)}
                className="mt-8 btn h-[50px] bg-white font-bold font-montserrat"
              >
                <FilmIcon className="text-black h-7" />
                <span>Watch trailer</span>
              </button>
            </div>
            {/* Trailer Show */}
            <div
              className={`absolute bottom-[100px] right-[64px] mt-12 w-[400px] ${
                showTrailer ? "block" : "hidden"
              }`}
            >
              <button
                onClick={() => setShowTrailer(false)}
                className="bg-white p-2 ml-1 absolute right-0 -top-10"
              >
                <XMarkIcon className="text-black h-6" />
              </button>
              <iframe
                title="Trailer"
                className="w-full block"
                style={{ height: "250px" }}
                src={`//www.youtube.com/embed/${findTrailer()}?modestbranding=1&autoplay=1`}
                frameborder="0"
                allow="autoplay fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
