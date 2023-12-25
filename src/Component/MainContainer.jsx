import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMovieTrailer from '../hooks/useMovieTrailer'

const MainContainer = () => {

    const movies =useSelector((store)=>store.movies?.nowPlayingMovies)
    
    if (!movies) return null;

    const mainMovies=movies.results[1]
    console.log(mainMovies)

    const {original_title, overview ,id}=mainMovies
    console.log('movie Id is :'+ mainMovies.id)

   
   
  
  return (
    <div className=' '>
        <VideoTitle title={original_title} overview={overview} ></VideoTitle>
        <VideoBackground movieId={id} className="absolute top-0" ></VideoBackground>
    </div>
  )
}

export default MainContainer