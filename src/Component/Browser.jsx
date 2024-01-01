import React, { useEffect } from 'react'
import Header from './Header'
import { API_Options } from '../Utils/constant';
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useMovieTrailer from '../hooks/useMovieTrailer';
import usePopularPlaying from '../hooks/useTopRatedPlaying';
import useTopRatedPlaying from '../hooks/useTopRatedPlaying';
import useUpcoming from '../hooks/useUpcoming';

const Browser = () => {

    const nowPlaying =useNowPlaying();
    const topRatedPlaying =useTopRatedPlaying()

  const upcomingPlying=useUpcoming()
   


  return (
    <div>
      {/* <Header></Header> */}
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browser