import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Obezbeđujemo kvalitetnije obrazovanje za bolji svet</h1>
        <p>
          Naš savremeni nastavni plan i program osmišljen je tako da osnaži
          studente znanjem, veštinama i iskustvom neophodnim za uspeh u
          dinamičnom svetu obrazovanja
        </p>
        <Link to="/o-nama">
          <button className="btn">
            Saznaj više <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
