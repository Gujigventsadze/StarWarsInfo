import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Planetbox = ({ planet, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/planet-details/${planet.name}`, { state: { planet } });
  };
  return (
    <div className="people-container" onClick={handleClick}>
      <div className="people-name">{planet.name}</div>
      <div className="gender-age">
        <div>Population: {planet.population}</div>
        <div>Gravity: {planet.gravity}</div>
      </div>
      <div className="people-type">
        <div>Category:</div> <img src={img} alt="Character" />
      </div>
    </div>
  );
};

export default Planetbox;

Planetbox.propTypes = {
  planet: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};
