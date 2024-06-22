import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovies = (point) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${point}?api_key=${import.meta.env.VITE_SECRET_KEY}`);
                setMovies(response.data.results);
                setIsLoading(false);
            } catch (error) {
                setIsError(error.message);
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [point]);

    return { movies, isLoading, isError };
};

export default useMovies;
