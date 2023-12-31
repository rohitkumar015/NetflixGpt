import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from "react"
import { API_Options } from "../Utils/constant"
import {  addUpcomingMovie } from '../Utils/movieSlice';


const useUpcoming = () => {
  
    const dispatch=useDispatch();
    const getUpcomingMovie= async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?',API_Options)
        const jsonMovie=await data.json()
        console.log('============== json movie ===========')
        console.log(jsonMovie.results)
        dispatch(addUpcomingMovie(jsonMovie.results))
      }
  
      useEffect(()=>{
        getUpcomingMovie()
        
      },[])
  
}

export default useUpcoming