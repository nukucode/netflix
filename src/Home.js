import React, { useState, useEffect } from "react";
import "./Home.css";
import {Link} from 'react-router-dom';
import TheatersIcon from '@mui/icons-material/Theaters';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
const API_KEY = "e41e10a70ecb26587607640ae2112868";


function Home() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [id]);

  console.log(data);

  const truncate = (string ,num) => {
        
    return string?.length > num ? string.substr(0,num-1)+'...' : string;
  }


  const navi = () => {
    navigate('/netflix_clone');
  }

  return (
    <>
      <div
        className="home"
        style={{
          backgroundSize: "cover",
          backgroundImage: ` url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="home__info">
   <div className="back" onClick={() => navi()}><IconButton><KeyboardBackspaceIcon /></IconButton></div>
       <div className="home__content">
       <div className="details--info">
          <h3
            className={data.vote_average > 5 ? "positive" : "negative"}
          >
            {data.vote_average * 10 + "%"}
          </h3>
        </div>

        <h1>{data.original_title || data.original_name}</h1>
        <p>{truncate(data.overview , 150)}</p>
        <div className="home__btn">
            <button className="trailer_btn"> <TheatersIcon/> Watch Trailer</button>
            <button className="movie_btn"> <PlayArrowIcon/> Watch Movie</button>
        </div>
       </div>
      </div>
    </>
  );
}

export default Home;
