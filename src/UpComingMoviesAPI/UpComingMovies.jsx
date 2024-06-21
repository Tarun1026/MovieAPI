import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpComingMovies() {
    const [upComingMovies,setUpComingMovies] = useState([]);
  
    const [isError, setError] = useState("");

    const UpComingMovie = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4b2313ca982860407b4ff3a8e3258ff7');
            setUpComingMovies(response.data.results);
        } catch (error) {
            setError(error.message);
        }
    };

   

    useEffect(() => {
        UpComingMovie();
        
    }, []);

    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}
            <h2>UpComing Movies</h2>
            <div className="container">
                {upComingMovies.map((movie) => (
                    <div className="b1" key={movie.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <div className="content">
                            <p><strong>Movie Name:</strong> {movie.title}</p>
                            <p><strong>Votes:</strong> {movie.vote_count}</p>
                            <p><strong>Popularity:</strong> {movie.popularity}</p>
                            <p><strong>Release Date:</strong> {movie.release_date}</p>
                            <p><strong>Language:</strong> {movie.original_language}</p>
                            <p><strong>Overview:</strong> {movie.overview}</p>
                        </div>
                        {/* <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                            alt={movie.title} 
                            className="movie-poster"
                        /> */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default UpComingMovies