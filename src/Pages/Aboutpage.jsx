import { motion } from "framer-motion";
import "./Aboutpage.css";
import gh from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import fb from "../assets/facebook (1).png";
import { Link } from "react-router-dom";

const Aboutpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="about-container"
    >
      <div className="about-title">About Us</div>
      <div className="about-body">
        The Star Wars Info is a dynamic, immersive web experience that showcases
        key elements from the iconic universe. The page is divided into three
        main sections: Planets, Starships, and Characters. Each section is
        carefully designed to display a list of related entities, featuring
        interactive elements like images, descriptions, and links to further
        details. The Planets section displays a variety of iconic worlds, such
        as Tatooine, Coruscant, and Hoth, with each planet’s unique features,
        environment, and historical significance. The Starships section
        highlights famous vehicles like the Millennium Falcon, X-Wing fighters,
        and Star Destroyers, showcasing their design, specifications, and role
        in the galactic conflict. The Characters section features legendary
        figures such as Luke Skywalker, Darth Vader, Leia Organa, and Yoda, with
        their bios, appearances, and affiliations, allowing users to explore
        their journeys through the saga. Each section includes visually rich
        elements such as detailed images, interactive filters, and hover effects
        to enhance user engagement. The page is designed to offer fans and
        newcomers alike a comprehensive, visually captivating way to explore the
        expansive Star Wars universe.
      </div>
      <div className="about-links">
        <Link to="https://github.com/Gujigventsadze" target="__blank">
          <img src={gh} />
        </Link>
        <Link
          to="https://linkedin.com/in/guji-gventsadze-95b214327/"
          target="__blank"
        >
          <img src={linkedIn} />
        </Link>
        <Link to="https://www.facebook.com/guji.gvencadze" target="__blank">
          <img src={fb} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
