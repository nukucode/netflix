import React, { useState, useEffect } from "react";
import iconAmazon from "../assets/icon-amazon.png";
import {
  LanguageIcon,
  ArrowUturnLeftIcon,
  BoltIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";
import iconNetflix from "../assets/icon-netflix.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetByIdQuery } from "../features/Api";

function Home() {
  const params = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(150);
  const [name, setName] = useState("More...");

  const { data } = useGetByIdQuery(params);
  console.trace(data);

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
    setName("");
  };

  return (
    <>
      <div
        className="w-full h-screen relative"
        style={{
          backgroundSize: "cover",
          backgroundImage: ` url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      ></div>
    </>
  );
}

export default Home;
