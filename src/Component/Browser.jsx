import React from 'react'
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedPlaying from '../hooks/useTopRatedPlaying';
import useUpcoming from '../hooks/useUpcoming';
import Header from '../Component/Header'
import { useSelector } from 'react-redux';
import GptContainer from './GptContainer';

const Browser = () => {

    const nowPlaying =useNowPlaying();
    const topRatedPlaying =useTopRatedPlaying()

  const upcomingPlying=useUpcoming()
   
  const isGptVisible=useSelector((state)=>state.gpt.gptShow)

  return (
    <div>
      <Header></Header>
     {
      isGptVisible ? <> <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer></>:<GptContainer></GptContainer>
     }
    </div>
  )
}

export default Browser