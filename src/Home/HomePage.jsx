import React from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import './HomePage.css';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
        <div className="home-page-background">
      <div className='div-1'>
        MOVIES 
       
        
        
      </div>
      <div className='div-2'>
        <div className='div-3'>
          <Link to="/popular"  className='links'>Popular Movies</Link>
        </div> 
        <div className='div-3'>
          <Link to="/upcoming" className='links'>Upcoming Movies</Link>
        </div>
        <div className='div-3'>
          <Link to="/top-rated" className='links'>Top Rated Movies</Link>
        </div>
        <div className='div-3'>
          <Link to="/now-playing" className='links'>Now Playing Movies</Link>
        </div>
   
      
       
      </div>
      </div>
    </>
  );
}

export default HomePage;
