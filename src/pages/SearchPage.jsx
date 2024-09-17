import React, { useEffect, useState } from "react";
import { useGetSearchQuery } from "../features/Api";
import { Link, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

const base_url = "https://image.tmdb.org/t/p/original";

function SearchPage() {
  const [pages, setPages] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const { query } = useParams();

  const params = { query: query, pageCount: pageCount };
  const { data, isLoading } = useGetSearchQuery(params);

  useEffect(() => {
    setPages(data?.total_pages);
  }, [data]);

  const pageHandler = (e, value) => {
    e.preventDefault();
    setPageCount(value);
  };
  return (
    <>
      {!isLoading ? (
        <div>
          <Navigation />
          <div className="mt-[3rem]">
            <h3 className="text-white text-[1.5rem] px-4 md:px-[64px]">
              here the results {params.query}
            </h3>
            <div className="flex flex-wrap mt-4 mr-2 px-4 md:px-[64px]">
              {data?.results.map((data) => (
                <Link
                  to={`/details/movie/${data.id}`}
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
            <div className="pagination">
              <Pagination
                count={pages}
                variant="outlined"
                shape="rounded"
                onChange={(e, value) => pageHandler(e, value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SearchPage;
