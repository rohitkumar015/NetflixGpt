import { useEffect } from "react"
import { API_Options } from "../Utils/constant"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../Utils/movieSlice";


const useNowPlaying= ()=>{
  const dispatch =useDispatch();
    const getBannerMovies= async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?',API_Options)
        const jsonMovie=await data.json()
        console.log('============== json movie ===========')
        console.log(jsonMovie.results)
        dispatch(addNowPlayingMovies(jsonMovie.results))
      }
  
      useEffect(()=>{
        getBannerMovies()
        
      },[])
}

export default useNowPlaying