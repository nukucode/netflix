import React, { useState, useEffect } from "react";
import "./Row.css";
import Label from "../Label/Label";
import RowItem from "./RowItem";

function Row({ title, fetch, type, isRepeat }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);

  return (
    <>
      <div className="row">
        <Label title={title} />
        <div
          className="list"
          style={{
            gap: isRepeat ? "0px" : null,
          }}
        >
          {movies?.map((data) => (
            <RowItem data={data} type={type} isRepeat={isRepeat} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
