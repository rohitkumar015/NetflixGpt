import React, { useEffect } from 'react'
import Header from './Header'
import { API_Options } from '../Utils/constant';
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useMovieTrailer from '../hooks/useMovieTrailer';

const Browser = () => {

    const nowPlaying =useNowPlaying();


   


  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browser