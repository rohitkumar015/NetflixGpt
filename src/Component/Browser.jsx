import React from 'react'
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedPlaying from '../hooks/useTopRatedPlaying';
import useUpcoming from '../hooks/useUpcoming';
import Header from '../Component/Header'

const Browser = () => {

    const nowPlaying =useNowPlaying();
    const topRatedPlaying =useTopRatedPlaying()

  const upcomingPlying=useUpcoming()
   


  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browser