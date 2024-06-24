import React, { useState } from "react";
import "./HomePage.css";

import AllMovies from "../AllMovies/Allmovies";


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

    

          {selected == "Popular Movies" ? <AllMovies movie='popular' heading="Popular Movies"/> : ""}
          {selected == "Upcoming Movies" ? <AllMovies movie="upcoming" heading="Upcoming Movies"/> : ""}
          {selected == "Top Rated Movies" ? <AllMovies movie='top_rated' heading="Top Rated Movies"/> : ""}
          {selected == "Now Playing Movies" ? <AllMovies movie='now_playing' heading="Now Playing Movies"/> : ""}
         
        </div>
      </div>
    </>
  );
}

export default HomePage;
