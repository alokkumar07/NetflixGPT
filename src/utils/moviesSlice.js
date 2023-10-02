import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'Movies',
    initialState:{
        nowPlayingMovies:null,
        trailerViedo:null,
        popularViedo:null,
        topRatedViedo:null,
        upComingViedo:null
    },

    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
         addTrailerViedo : (state,action) =>{
          state.trailerViedo = action.payload;
         },
         addPopularMovies : (state,action) =>{
          state.popularViedo = action.payload;
         },
         addTopRatedMovies : (state,action) =>{
          state.topRatedViedo = action.payload;
         },
         addUpComingMovies : (state,action) =>{
          state.upComingViedo = action.payload;
         }
    },
});

export const {addNowPlayingMovies,addTrailerViedo,addPopularMovies,addTopRatedMovies,addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;