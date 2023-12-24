import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies =useSelector((store)=>store.movies?.nowPlayingMovies)
   
    if (!movies) return null;

    const mainMovies=movies.results[0]
    console.log(mainMovies)

    const {original_title, overview}=mainMovies
   

  return (
    <div className='container'>
        <VideoTitle title={original_title} overview={overview} ></VideoTitle>
        <VideoBackground></VideoBackground>
    </div>
  )
}

export default MainContainer