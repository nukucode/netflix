import React , {useEffect , useState} from "react";
import "./Banner.css";
import requests from "./Request";
import axios from './axios'
import {Link} from 'react-router-dom';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchUrl(){

            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]);

            return request;
        }

        fetchUrl();
    },[])


    const firstyear = new Date(movie.first_air_date);


    function truncate(string , num){
        return string?.length > num ? string.substr(0 , num -1)+"..." : string
    }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          ` url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
     <div className="banner__info">
     <h3 className="banner__title"> {movie?.title || movie?.name || movie?.original_name}</h3>
    
    <div className="banner__del">
    <h4 className="info point">{movie?.vote_average} Points</h4>
     <h4 className="info">{firstyear.getFullYear()}</h4>
     <h4 className="info">{movie.origin_country}</h4>
    </div>

      <div className="btn">
        <Link to={`/details/movie/${movie?.id}`}><button className="btn_1">PLAY</button></Link>
        <button className="btn_2">MY lIST</button>
      </div>

      <p>
        {truncate(movie?.overview , 150)} 
      </p>
     </div>

     <div className="fade__button"></div>
    </div>
  );
}

export default Banner;
