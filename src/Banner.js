
import React, { useState,useEffect} from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from './Request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Banner() {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl]= useState("");
     
   useEffect(()=> {
       async function fetchData () {
          const request = await axios.get(requests.fetchNetflixOriginals);
              
            setMovies(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;    
       }
       fetchData();
   },[]);

   const opts = {
    height : "300",
    width : "100%",
    playerVars : {autoplay : 1,}

};
   
   const handleClick = (movies) => {
    if(trailerUrl){
       setTrailerUrl("");
    }
    else{
     movieTrailer( movies?.title ||movies?.name ||movies?.original_name || "" )
     .then(url => {
         const urlparams = new URLSearchParams(new URL(url).search); 
        setTrailerUrl(urlparams.get("v"));
     })
     .catch(error=> alert("trailer not avaliable"));
    }
};
  

    
  return (
    <header className='Banner'  style={{
       backgroundSize : "cover",
       backgroundImage : `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
       backgroundposition :"center center" ,
    }} > 

    <div className='Banner_contents'>
    <h1 className="Banner_title">
        
        {movies?.title || movies?.name || movies?.original_name}
    </h1>
         <div className="Banner_buttons">
            <button className='Banner_button' onClick ={() => handleClick(movies)}> Play</button>
            <button className='Banner_button'>My list</button>
         </div>
         <h1 className="Banner_description">
          {movies?.overview}
         </h1>
         <div className="Banner--fadeBottom"/>
         { trailerUrl && <YouTube videoId={trailerUrl}  opts={opts}/>}
    </div>
    </header>
  )
}

export default Banner;