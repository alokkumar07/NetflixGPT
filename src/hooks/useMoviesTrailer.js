import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerViedo } from "../utils/moviesSlice";

const useMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();
     const trailerViedo  = useSelector(store=>store.movies.trailerViedo)
    const getMovieVidoes = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
    
        const filterData = json.results.filter((viedo) => viedo.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerViedo(trailer))
      };
      useEffect(()=>{
        !trailerViedo && getMovieVidoes()
      },[])
}

export default useMoviesTrailer;