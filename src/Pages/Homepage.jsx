import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Homepage.css";
import axios from "axios";
import Peoplebox from "../Components/PeopleBox/Peoplebox";
import Planetbox from "../Components/Planetbox/Planetbox";
import trooper from "../assets/droid.png";
import Starshipbox from "../Components/StarshipBox/Starshipbox";
import starshipImg from "../assets/death-star.png";
import planetImg from "../assets/language.png";

const Homepage = () => {
  const API = "https://swapi.dev/api/";

  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "People";
  const initialPage = parseInt(params.get("page")) || 1;

  const [category, setCategory] = useState(initialCategory);
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = `${API}${category.toLowerCase()}?page=${currentPage}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [category, currentPage, API_URL]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage, category);
      updateUrl(nextPage, category);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage, category);
      updateUrl(prevPage, category);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
    updateUrl(1, newCategory);
  };

  const updateUrl = (page, category = category) => {
    navigate(`/?category=${category}&page=${page}`);
  };

  return (
    <div className="homepage">
      <form className="search-bar-container">
        <div className="inputs">
          <input
            className="name-search"
            type="text"
            placeholder="Name"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <select
            className="categories"
            name="Categories"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="People">People</option>
            <option value="Starships">Starships</option>
            <option value="Planets">Planets</option>
          </select>
        </div>
      </form>

      <div className="results">
        {data.length === 0 ? (
          <p className="loading">Loading...</p>
        ) : category === "People" ? (
          data.map((char, index) => (
            <Peoplebox key={index} char={char} img={trooper} />
          ))
        ) : category === "Planets" ? (
          data.map((planet, index) => (
            <Planetbox key={index} planet={planet} img={planetImg} />
          ))
        ) : category === "Starships" ? (
          data.map((starship, index) => (
            <Starshipbox key={index} starship={starship} img={starshipImg} />
          ))
        ) : (
          <p>No components for this category yet.</p>
        )}
      </div>

      <div className="pagination-controls">
        <button
          className="page-btn"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-count">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="page-btn"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
