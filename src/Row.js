import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from 'react-router-dom';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, isTop, fetch }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetch]);

  return (
    <>
      <div className="row">
        <h3>{title}</h3>
       
        <div className="list">
          {movies.map((data) => (
            <Link to={`/details/movie/${data.id}`} key={data.id} className="link" ><img className="bigPoster" key={data.id} src={`${base_url}${data.poster_path}`} /></Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
