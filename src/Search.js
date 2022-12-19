import React, { useState, useEffect } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useGetSearchQuery } from "./features/Api";
import Pagination from "@mui/material/Pagination";
const base_url = "https://image.tmdb.org/t/p/original";

function Search({ query }) {
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
    e.preventDefault()
    setPageCount(value);
  };

  return (
    <>
      <div className="search">
        <div className="lists">
          {results?.map((data) => (
            <Link
              className="box"
              key={data.id}
              to={`/details/movie/${data.id}`}
            >
              <img
                className="bigb"
                src={`${base_url}${
                  data?.poster_path ||
                  data?.backdrop_path
                } `}
              />
              <div className="box__info">
                <h3>{data.name || data.original_name || data.title}</h3>
                <span>{data.release_date}</span>
                <p className="details--info">{data.vote_average * 10 + "%"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pagination">
        {query && (
          <Pagination
            count={pages}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => pageHandler(e, value)}
          />
        )}
      </div>
    </>
  );
}

export default Search;
