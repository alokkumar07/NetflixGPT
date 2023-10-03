import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovie = () =>{
    const dispatch = useDispatch();
    const uPComingMovies = useSelector(store => store.movies.upComingViedo)


    const getUpComingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
    };
  
    useEffect(() => {
        !uPComingMovies && getUpComingMovies();
    }, []);
}

export default useUpComingMovie;