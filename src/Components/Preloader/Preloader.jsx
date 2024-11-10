import "./Preloader.css";
import { useEffect, useState } from "react";
import droid from "../../assets/droid.png";
import starship from "../../assets/death-star.png";
import planet from "../../assets/language.png";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  return (
    <section id="preloader">
      <div className="preloader-title">STAR WARS</div>
      <div className="preloader-icons">
        <div className="preloader-icon">
          <img src={droid} />
          <div>Characters</div>
        </div>
        <div className="preloader-icon">
          <img src={planet} />
          <div>Planets</div>
        </div>
        <div className="preloader-icon">
          <img src={starship} />
          <div>Starships</div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
