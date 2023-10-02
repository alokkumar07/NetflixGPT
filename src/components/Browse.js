import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { addUpComingMovies } from "../utils/moviesSlice";
import useUpComingMovie from "../hooks/useUpComingMovie";

const Browse = () => {

useNowplayingMovies();
usePopularMovies()
useTopRatedMovies()
useUpComingMovie()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
        MainContainer
          -ViedoBackground
        SecondaryContainer
          -MoviesList * N
            -cards * N
          
        */
      }
    </div>
  );
};

export default Browse;
