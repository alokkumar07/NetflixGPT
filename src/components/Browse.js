import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { addUpComingMovies } from "../utils/moviesSlice";
import useUpComingMovie from "../hooks/useUpComingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearches);

  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovie();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
        MainContainer
          -ViedoBackground
        SecondaryContainer
          -MoviesList * N
            -cards * N
          
        */}
    </div>
  );
};

export default Browse;
