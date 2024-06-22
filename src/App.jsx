import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NowPlayingMovies from './NowPlaying/NowPlayingMovies';
import MovieApi from './PopularMovieAPI/MovieApi';
import UpComingMovies from './UpComingMoviesAPI/UpComingMovies';
import HomePage from './Home/HomePage';
import TopRatedMovies from './TopRated/TopRatedMovies';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/popular" element={<MovieApi />} />
        <Route exact path="/upcoming" element={<UpComingMovies />} />
        <Route exact path="/top-rated" element={<TopRatedMovies />} />
        <Route exact path="/now-playing" element={<NowPlayingMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
