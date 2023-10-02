import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies)
    // console.log(movies.nowPlayingMovies)
  return (
    movies.nowPlayingMovies &&
    <div className='bg-black'>
        <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={'Now playing'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Top Rated'} movies={movies.topRatedViedo}/>
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Upcoming Movies'} movies={movies.upComingViedo}/>
        <MovieList title={'Popular'} movies={movies.popularViedo}/>
        </div>

    </div>
  )
}

export default SecondaryContainer