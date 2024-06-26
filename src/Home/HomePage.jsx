import React, { useState } from "react";
import "./HomePage.css";

import AllMovies from "../AllMovies/Allmovies";

function HomePage() {
  const [selected, setSelected] = useState("");
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

  const movieCategories = [
    { value: "popular", heading: "Popular Movies" },
    { value: "upcoming", heading: "Upcoming Movies" },
    { value: "top_rated", heading: "Top Rated Movies" },
    { value: "now_playing", heading: "Now Playing Movies" },
  ];

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
            {movieCategories.map((category) => (
              <option key={category.value}>{category.heading}</option>
            ))}
          </select>

          {movieCategories.map((category) =>
            selected === category.heading ? (
              <AllMovies key={category.value} movie={category.value} heading={category.heading} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
