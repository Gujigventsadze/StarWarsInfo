import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Starshipbox = ({ starship, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/starship-details/${starship.name}`, { state: { starship } });
  };

  return (
    <div className="people-container" onClick={handleClick}>
      <div className="people-name">{starship.name}</div>
      <div className="gender-age">
        <div>Max Speed: {starship.max_atmosphering_speed}</div>
        <div>Crew: {starship.crew}</div>
      </div>
      <div className="people-type">
        <div>Category:</div> <img src={img} alt="Character" />
      </div>
    </div>
  );
};

export default Starshipbox;

Starshipbox.propTypes = {
  starship: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};
