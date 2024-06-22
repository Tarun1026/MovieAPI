import React from 'react';
import useMovies from '../CustomHook/useMovie';
import loadingGif from '../assets/loading-white.gif';


function TopRatedMovies() {
    const { movies, isLoading, isError } = useMovies('top_rated');

    return (
        <>
            {isError && <h2>{isError}</h2>}
            <h2>Top-Rated Movies</h2>
            <div className="container">
                {isLoading ? (
                    <div ><img src={loadingGif} alt="Loading" className="loading-gif" /></div>
                ) : (
                    movies.map((movie) => (
                        <div className="b1" key={movie.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                className="movie-poster"
                            />
                            <div className="content">
                            <p><strong className='titles'>Movie Name:</strong> {movie.title}</p>
                                <p><strong className='titles'>Votes:</strong> {movie.vote_count}</p>
                                <p><strong className='titles'>Popularity:</strong> {movie.popularity}</p>
                                <p><strong className='titles'> Release Date:</strong> {movie.release_date}</p>
                                <p><strong className='titles'>Language:</strong> {movie.original_language}</p>
                                <p><strong className='titles'>Overview:</strong> {movie.overview}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default TopRatedMovies;
