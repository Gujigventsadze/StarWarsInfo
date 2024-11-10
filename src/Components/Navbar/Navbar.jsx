import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="navbar">
        <Link to="/" className="navbar-title">
          STARWARS.DEV
        </Link>
        <div className="navbar-menu" onClick={handleMenuClick}>
          <div className={isMenuOpen ? "line1-active" : "line1"}></div>
          <div className={isMenuOpen ? "line2-active" : "line2"}></div>
          <div className={isMenuOpen ? "line3-active" : "line3"}></div>
        </div>
      </section>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleMenuClick}>
          About
        </Link>
        <Link to="/contact" onClick={handleMenuClick}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
