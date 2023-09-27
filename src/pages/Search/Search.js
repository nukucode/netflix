import React, { useState, useEffect } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useGetSearchQuery } from "../../features/Api";
import Pagination from "@mui/material/Pagination";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("thor");
  const [pages, setPages] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const info = {
    query: query,
    pageCount: pageCount,
  };

  const { data } = useGetSearchQuery(info);
  const results = data?.results;

  useEffect(() => {
    setPages(data?.total_pages);
  }, [data]);

  const pageHandler = (e, value) => {
    e.preventDefault();
    setPageCount(value);
  };

  return (
    <>
      <div className="search">
        <div className="search-header">
          <button onClick={() => navigate("/")}>
            <ArrowLeftIcon className="icon" />
          </button>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="lists">
          {results?.map((data) => {
            if (!data?.poster_path || !data?.backdrop_path) return null;
            return (
              <Link
                className="box"
                key={data.id}
                to={`/details/movie/${data.id}`}
              >
                <img
                  src={`${base_url}${
                    data?.poster_path || data?.backdrop_path
                  } `}
                  alt={data.title}
                  loading="lazy"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="pagination">
        {query && (
          <Pagination
            count={pages}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              pageHandler(e, value);
              window.scrollTo(0, 0);
            }}
          />
        )}
      </div>
    </>
  );
}

export default Search;
