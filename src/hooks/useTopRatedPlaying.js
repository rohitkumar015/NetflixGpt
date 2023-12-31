import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addtopRatedPlaying, addNowPlayingMovies, } from '../Utils/movieSlice';
import { API_Options } from '../Utils/constant';

const useTopRatedPlaying = () => {
    const dispatch =useDispatch();
    const getTopRatedPlaying= async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/top_rated?',API_Options)
        const jsonMovie=await data.json()
        console.log('============== popular movie ===========')
        console.log(jsonMovie.results)
        dispatch(addtopRatedPlaying(jsonMovie.results))
      }
  
      useEffect(()=>{
        getTopRatedPlaying()
        
      },[])
}

export default useTopRatedPlaying