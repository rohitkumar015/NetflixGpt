import { useEffect } from "react"
import { API_Options } from "../Utils/constant"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../Utils/movieSlice";


const useNowPlaying= ()=>{
  const dispatch =useDispatch();
    const getBannerMovies= async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_Options)
        const jsonMovie=await data.json()
        console.log(jsonMovie)
        dispatch(addNowPlayingMovies(jsonMovie))
      }
  
      useEffect(()=>{
        getBannerMovies()
        
      },[])
}

export default useNowPlaying