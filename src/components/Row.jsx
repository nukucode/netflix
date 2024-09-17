import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetch, type = "movie" }) {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState(false);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);

  // show text if user hover title
  const handleTextShow = () => {
    setText(true);
  };

  // hide text if user not hover title
  const handleTextHide = () => {
    setText(false);
  };

  // => arrow animate
  const arrowMove = {
    x: 10,
  };

  const arrowReturn = {
    x: 0,
  };

  return (
    <>
      <div className="w-full overflow-scroll relative -top-[110px] mb-[50px]">
        {/* Row Title */}
        <div
          onMouseOver={handleTextShow}
          onMouseOut={handleTextHide}
          className="flex items-center space-x-2 px-4 md:px-[64px]"
        >
          <h3 className="font-monserrat font-bold text-[30px] normal-case text-white">
            {title}
          </h3>
          <motion.span
            animate={text && text ? { opacity: 1 } : { opacity: 0 }}
            className={`text-[12px] text-white font-semibold ${
              text && text ? "block" : "hidden"
            }`}
          >
            Explore All
          </motion.span>
          <motion.div
            animate={text && text ? arrowMove : arrowReturn}
            transition={{ duration: 0.5 }}
          >
            <ChevronRightIcon className="h-5 text-white" />
          </motion.div>
        </div>

        {/* Row Content */}
        <div className="flex overflow-y-hidden overflow-x-scroll no-scrollbar mt-4 mr-2 px-4 md:px-[64px]">
          {movies?.map((data) => (
            <Link
              to={`/details/${data.media_type ? data?.media_type : type}/${
                data.id
              }`}
              key={data.id}
            >
              <img
                className="max-w-[160px] rounded-sm object-cover pr-4"
                key={data.id}
                src={`${base_url}${data.poster_path}`}
                alt={data?.title}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
