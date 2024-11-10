import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Peoplebox.css";

const Peoplebox = ({ char, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${char.name}`, { state: { char } });
  };

  return (
    <div className="people-container" onClick={handleClick}>
      <div className="people-name">{char.name}</div>
      <div className="gender-age">
        <div>Gender: {char.gender}</div>
        <div>Birth Year: {char.birth_year}</div>
      </div>
      <div className="people-type">
        <div>Category:</div> <img src={img} alt="Character" />
      </div>
    </div>
  );
};

Peoplebox.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    eye_color: PropTypes.string,
    skin_color: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  img: PropTypes.string.isRequired,
};

export default Peoplebox;
