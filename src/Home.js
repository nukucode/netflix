import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import iconAmazon from "./assets/icon-amazon.png";
import iconNetflix from "./assets/icon-netflix.png";
import db from './Firebase';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const API_KEY = "e41e10a70ecb26587607640ae2112868";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(150)
  const [name, setName] = useState('More...')


  



  useEffect(() => {
    async function loadAll() {
      if (id) {
        await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY} `
        )
          .then((res) => res.json())
          .then((data) => setData(data));

        await fetch(
          `https://api.themoviedb.org/3//movie/${id}/videos?language=en-US&api_key=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => setVideo(data.results));
      }
    }
    loadAll();
  }, [id]);

  async function loadVideo() {
    if (video.length > 0) {
      const url = `https://youtube.com/embed/${video[0].key}?autoplay=1&controls=0&showinfo=0&autohide=1`;
      setVideoId(url);
    }

    setOpen(true);
  }
  

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) : string;
  };


  const readMore = () => {
    setText(1500);
    setName('')
  }

  return (
    <>
      <div
        className="home"
        style={{
          backgroundSize: "cover",
          backgroundImage: ` url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        
      </div>
      <div className="home__info">
      
          <div className="back" onClick={() => navigate(-1)}>
            <IconButton>
              <KeyboardBackspaceIcon />
            </IconButton>
          </div>
   


       
        
    
       
       
        `
        <div className="home__content">
          <div className="details--info">
            <h3 className={data.vote_average > 5 ? "positive" : "negative"}>
              {data.vote_average * 10 + "%"}
            </h3>
          </div>

          <h1>{data.original_title || data.original_name}</h1>
          <p>{truncate(data.overview, text)} <span className="read__more" onClick={() => readMore()}>{name}</span> </p>
          <div className="home__btn">
            <button className="video_btn" onClick={() => loadVideo()}>
              {" "}
              <TheatersIcon /> Watch video
            </button>
            {data.homepage !== undefined &&
              data.homepage !== "" && (
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details--officialsite"
                >
                  <div className="movie_btn">
                    {data.homepage.includes("netflix") ? (
                      <img alt="Netflix" src={iconNetflix} width="23" />
                    ) : data.homepage.includes("amazon") ? (
                      <img alt="Amazon" src={iconAmazon} width="23" />
                    ) :  (
                      <LanguageIcon />
                    )}
                  </div>
                </a>
              )}
          </div>
        </div>
        <div
          className={open ? "pop_back_open pop_back" : "pop_back"}
          onClick={() => setOpen(false)}
        >
          <div className="back__icon">
            <IconButton>
              <KeyboardBackspaceIcon />
            </IconButton>
          </div>
          <div className="pop_up">
            <iframe
              src={videoId}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;  controlls; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
