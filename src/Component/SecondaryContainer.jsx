import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const SecondaryContainer = () => {

  const movies =useSelector((store)=>store.movies)
  console.log('====================== seconndary =============')
  console.log(movies)
  return (
    <div>

      <Movielist title="Movie List" movies={movies.nowPlayingMovies} >

      </Movielist>

    </div>
  )
}

export default SecondaryContainer