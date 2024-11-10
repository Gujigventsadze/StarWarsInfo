import { useLocation } from "react-router-dom";
import "./Detailspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Starshipdetailspage = () => {
  const { state } = useLocation();
  const { starship } = state;

  const [movies, setMovies] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieRequests = starship.films.map((url) => axios.get(url));
        const responses = await Promise.all(movieRequests);

        const movieTitles = responses.map((res) => res.data.title);
        setMovies(movieTitles);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (starship.films.length > 0) {
      fetchMovies();
    }
  }, [starship.films]);

  return (
    <section id="details-page">
      <div className="details-container">
        <div className="details-name">{starship.name}</div>
        <div className="general-information">
          <div>
            Manufacturer: &nbsp;&nbsp;{capitalize(starship.manufacturer)}
          </div>
          <div>Cost: &nbsp;&nbsp;{capitalize(starship.cost_in_credits)}</div>
          <div>Crew: &nbsp;&nbsp;{starship.crew}</div>
          <div>Speed: &nbsp;&nbsp;{starship.max_atmosphering_speed}</div>
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

export default Starshipdetailspage;
