import React, { useEffect } from 'react'
import Header from './Header'
import { API_Options } from '../Utils/constant';
import useNowPlaying from '../hooks/useNowPlaying';
const Browser = () => {

    const nowPlaying =useNowPlaying();


  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default Browser