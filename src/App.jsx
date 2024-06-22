import React from 'react';
import NowPlayingMovies from './NowPlaying/NowPlayingMovies';
import MovieApi from './PopularMovieAPI/MovieApi';
import UpComingMovies from './UpComingMoviesAPI/UpComingMovies';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute'
import HomePage from './Home/HomePage';
import './App.css';
import TopRatedMovies from './TopRated/TopRatedMovies';

function App() {

  return (
    <>
    <Router>
      <Routes>

<Route exact path='/' element={<HomePage/>}/>
<Route exact path='/popular' element={<MovieApi/>}/>
<Route exact path='/upcoming' element={<UpComingMovies/>}/>
<Route exact path='/top-rated' element={ <TopRatedMovies />}/>
<Route exact path='/now-playing' element={<NowPlayingMovies/>}/>

      </Routes>

  </Router>
  </>
  );
}

export default App;
