import { useLocation } from "react-router-dom";
import "./Detailspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Details = () => {
  const { state } = useLocation();
  const { char } = state;

  const [movies, setMovies] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieRequests = char.films.map((url) => axios.get(url));
        const responses = await Promise.all(movieRequests);

        const movieTitles = responses.map((res) => res.data.title);
        setMovies(movieTitles);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (char.films.length > 0) {
      fetchMovies();
    }
  }, [char.films]);

  return (
    <section id="details-page">
      <div className="details-container">
        <div className="details-name">{char.name}</div>
        <div className="general-information">
          <div>Gender: {capitalize(char.gender)}</div>
          <div>Birth Year: {char.birth_year}</div>
          <div>Skin Color: {capitalize(char.skin_color)}</div>
          <div>Eye Color: {capitalize(char.eye_color)}</div>
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

export default Details;
