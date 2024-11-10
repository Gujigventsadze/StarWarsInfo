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
import { motion } from "framer-motion";

const Homepage = () => {
  const API = "https://swapi.dev/api/";

  const navigate = useNavigate();
  const location = useLocation();

  //Parameters
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "People";
  const initialPage = parseInt(params.get("page")) || 1;
  const initialSearch = params.get("search") || "";

  // States for the Application
  const [category, setCategory] = useState(initialCategory);
  const [searchWord, setSearchWord] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Dynamically generating url
  const API_URL = `${API}${category.toLowerCase()}?page=${currentPage}`;

  //Fetching data from the url and figuring out how many pages we need
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

  // Filtering data whenever the search word changes
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchWord, data]);

  // Going to next or previous page and updating url accordingly
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      updateUrl(nextPage, category, searchWord);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      updateUrl(prevPage, category, searchWord);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  //Self-explanatory :)
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
    updateUrl(1, newCategory, searchWord);
  };

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
    updateUrl(1, category, e.target.value);
  };
  //Also self explanatory :)
  const updateUrl = (page, category = category, searchWord = "") => {
    navigate(`/?category=${category}&page=${page}&search=${searchWord}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="homepage"
    >
      <form className="search-bar-container">
        <div className="inputs">
          <input
            className="name-search"
            type="text"
            placeholder="Search Name"
            value={searchWord}
            onChange={handleSearchChange}
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
        {filteredData.length === 0 ? (
          <p className="loading">No Data Found</p>
        ) : category === "People" ? (
          filteredData.map((char, index) => (
            <Peoplebox key={index} char={char} img={trooper} />
          ))
        ) : category === "Planets" ? (
          filteredData.map((planet, index) => (
            <Planetbox key={index} planet={planet} img={planetImg} />
          ))
        ) : category === "Starships" ? (
          filteredData.map((starship, index) => (
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
    </motion.div>
  );
};

export default Homepage;
