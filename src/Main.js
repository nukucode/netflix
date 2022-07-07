import React , {useState , useEffect} from 'react'
import './Main.css';
import {useParams} from 'react-router';
import requests from './Request';
import axios from './axios';
import { movieInfo } from './Request';


function Main() {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    console.log(id);

    useEffect(() => {

        async function loadAll(){

          if(id){

            const loadAll = async () => {

                const info = await axios.get(movieInfo(id));
                setMovie(info);
            }
            loadAll();
        }
        
          }
    },[id])

    console.log(movie)

  return (
    <div className='main'>

         </div>
  )
}

export default Main