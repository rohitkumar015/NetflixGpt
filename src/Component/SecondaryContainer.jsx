import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const SecondaryContainer = () => {

  const movies =useSelector((store)=>store.movies)
  console.log('====================== seconndary =============')
  console.log(movies)
  return (
    <div className='bg-black '>

      <Movielist title="Popular Movies" movies={movies.nowPlayingMovies} >

      </Movielist>

      <Movielist title="Top Rated"  movies={movies.topRatedPlaying} >

      </Movielist>
      <Movielist title="Upcoming "  movies={movies.upcomingMovie} >

</Movielist>

    </div>
  )
}

export default SecondaryContainer