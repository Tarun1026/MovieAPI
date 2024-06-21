import React from 'react';
import NowPlayingMovies from './NowPlaying/NowPlayingMovies';
import MovieApi from './PopularMovieAPI/MovieApi';
import UpComingMovies from './UpComingMoviesAPI/UpComingMovies';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import HomePage from './Home/HomePage';
import './App.css';
import TopRatedMovies from './TopRated/TopRatedMovies';

function App() {
  <ProtectedRoute/>
  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <>
          <HomePage />
        </>
      ),
    },

    {
      path: "/popular",
      element: (
        <>
          <MovieApi />
        </>
      ),
    },

    {
      path: "/upcoming",
      element: (
        <>
          <UpComingMovies />
        </>
      ),
    },

    {
      path: "/top-rated",
      element: (
        <>
          <TopRatedMovies />
        </>
      ),
    },
    
    {
      path: "/now-playing",
      element: (
        <>
          <NowPlayingMovies/>
        </>
      ),
    },
    
    
    
   
    
    
      
    
   
  ]);
  return (
    <>
    <RouterProvider router={router} />
    
  </>
  );
}

export default App;
