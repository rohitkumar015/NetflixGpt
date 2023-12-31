import React, { useEffect, useState } from "react";
import { API_Options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  
 const getTrailer= useMovieTrailer(movieId);

 
  return (
    <div className="relative border-0">
      <iframe
        className="w-100 h100 "
    src={`https://www.youtube.com/embed/${getTrailer}?autoplay=1&mute=1`}
        title="YouTube video player"
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
