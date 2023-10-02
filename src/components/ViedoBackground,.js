import React from "react";
import {useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const ViedoBackground = ({ movieId }) => {
    // const [trailerId,setTrailerId] = useState(null)
    const  trailerViedo = useSelector(store=>store.movies?.trailerViedo)
    //fetching trailer viedo data &&  updating the store
    useMoviesTrailer((movieId))

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerViedo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default ViedoBackground;
