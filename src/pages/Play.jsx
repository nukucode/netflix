import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetByIdQuery, useGetVideosQuery } from "../features/Api";
import { FilmIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

function Home() {
  const [showTrailer, setShowTrailer] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const videos = useGetVideosQuery(params);
  const { data } = useGetByIdQuery(params);

  console.log(data);

  // from videos to find trailer
  const findTrailer = () => {
    const trailers = videos?.data?.results?.find(
      (trailer) => trailer.type === "Trailer" || "Opening Credits"
    );
    return trailers?.key;
  };

  return (
    <>
      <section
        className="bg-cover bg-center object-contain"
        style={{
          backgroundImage: `linear-gradient(90deg, #000000f0 0%, #000000e6 0%, #000000c3 5%), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        }}
      >
        <div className="relative h-screen">
          <Navigation />
          <div className="absolute bottom-[100px] left-[64px] max-w-[500px]">
            <div className="bg-green w-fit p-2">
              <span className="text-white text-1rem font-montserrat font-bold">
                {data?.vote_average * 10}%
              </span>
            </div>
            <h1 className=" my-7 text-[3.5rem] font-bold text-white leading-tight">
              {data?.title}
            </h1>
            <p className="text-white">{data?.overview}</p>
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
              className="bg-white p-2 ml-1"
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
    </>
  );
}

export default Home;
