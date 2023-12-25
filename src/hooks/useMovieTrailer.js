import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';
import { API_Options } from '../Utils/constant';


const useMovieTrailer = (movieId) => {
  
  const [trailerId, setTrailerId] = useState(null);
 const dispatch = useDispatch();

 const getMovieTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
        API_Options
      );
      const jsonData = await data.json();
      console.log('i ma jsondata from useMovietrailer :'+jsonData);
      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );

      dispatch(addTrailerVideo(filterData))
      setTrailerId(filterData[0].key);
      console.log(filterData);
    } catch (error) { 
      console.log(error.message);
    }
 };

 useEffect(() => {
    getMovieTrailer();
 }, [movieId]);

 return trailerId;
  
}

export default useMovieTrailer