import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailer: null,topRatedPlaying:null,upcomingMovie:null },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addTrailerVideo:(state,actions)=>{
        state.trailer=actions.payload;
    }
    ,
    addtopRatedPlaying:(state,actions)=>{
      state.topRatedPlaying = actions.payload;
    }
    ,addUpcomingMovie:(state,actions)=>{
      state.upcomingMovie = actions.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrailerVideo,addtopRatedPlaying,addUpcomingMovie } = movieSlice.actions;
export default movieSlice.reducer;
