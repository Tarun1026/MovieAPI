import React, { useState } from "react";
import "./HomePage.css";
import MovieApi from "../PopularMovieAPI/MovieApi";
import UpComingMovies from "../UpComingMoviesAPI/UpComingMovies";
import NowPlayingMovies from "../NowPlaying/NowPlayingMovies";
import TopRatedMovies from "../TopRated/TopRatedMovies";

// import

function HomePage() {
  const [selected, setSelected] = useState("");
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setIsBackgroundVisible(false);
  };

  return (
    <>
      <div
        className={`home-page-background ${
          !isBackgroundVisible ? "hidden" : ""
        }`}
      >
        <div className="div-1">MOVIES</div>
        <div className="div-2">
          <select
            value={selected}
            onChange={(e) => handleChange(e)}
            className="dropdown"
          >
            <option value="" disabled>
              Select Movies
            </option>
            <option>Popular Movies</option>
            <option>Upcoming Movies</option>
            <option>Top Rated Movies</option>
            <option>Now Playing Movies</option>
          </select>

          {selected == "Popular Movies" ? <MovieApi /> : ""}
          {selected == "Upcoming Movies" ? <UpComingMovies /> : ""}
          {selected == "Top Rated Movies" ? <TopRatedMovies /> : ""}
          {selected == "Now Playing Movies" ? <NowPlayingMovies /> : ""}
         
        </div>
      </div>
    </>
  );
}

export default HomePage;
