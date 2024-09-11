import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetch }) {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState(false);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);

  const handleText = () => {
    console.log("👲", "Mouse Enter");
    setText(!text);
    console.log("🧛‍♂️", "Mouse Out");
  };

  return (
    <>
      <div className="relative left-[64px] -top-[110px] mb-[50px]">
        {/* Row Title */}
        <motion.div
          onMouseOver={handleText}
          className="flex items-center space-x-2"
        >
          <h3 className="font-roboto text-[20px] normal-case text-white">
            {title}
          </h3>
          <motion.div
            whileHover={{ x: 40 }}
            key={1}
            transition={{ duration: 0.2 }}
          >
            {text && text ? (
              <span className="text-[15px]">Explore All</span>
            ) : null}
            <ChevronRightIcon className="h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Row Content */}
        <div className="flex overflow-y-hidden overflow-x-scroll mt-4 mr-2">
          {movies?.map((data) => (
            <Link
              to={`/details/${"movie" || "tv"}/${data.id}`}
              key={data.id}
              className=""
            >
              <img
                className="max-h-[300px] rounded-sm object-cover"
                key={data.id}
                src={`${base_url}${data.poster_path}`}
                alt={data?.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
