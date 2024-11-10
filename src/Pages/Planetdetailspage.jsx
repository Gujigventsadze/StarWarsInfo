import { useLocation } from "react-router-dom";
import "./Detailspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Planetdetailspage = () => {
  const { state } = useLocation();
  const { planet } = state;

  const [movies, setMovies] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieRequests = planet.films.map((url) => axios.get(url));
        const responses = await Promise.all(movieRequests);

        const movieTitles = responses.map((res) => res.data.title);
        setMovies(movieTitles);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (planet.films.length > 0) {
      fetchMovies();
    }
  }, [planet.films]);

  return (
    <section id="details-page">
      <div className="details-container">
        <div className="details-name">{planet.name}</div>
        <div className="general-information">
          <div>Population: &nbsp;&nbsp;{capitalize(planet.population)}</div>
          <div>Gravity: &nbsp;&nbsp;{planet.gravity}</div>
          <div>Climate: &nbsp;&nbsp;{capitalize(planet.climate)}</div>
          <div>Terrain: &nbsp;&nbsp;{capitalize(planet.terrain)}</div>
        </div>
        <div className="details-movies">
          <div className="movies">Movies</div>
          {movies.length > 0 ? (
            <div className="movie-container">
              {movies.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </div>
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Planetdetailspage;
