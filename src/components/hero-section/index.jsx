import React from "react";
import "./style.scss";

const HeroSection = ({ data }) => {
  return (
    <div className="hero-content container-1320">
      <div className="hero-infos">
        <h1>{data?.h1}</h1>
        <p>{data?.p}</p>
        <form>
          <input className="input" type="text" placeholder={data?.pl1} required />
          <input
            className="input"
            type="text"
            placeholder={data?.pl2}
            required
          />
          <img className="plug-input" src="/plugin.svg" alt="plugin" />
          <div className="contact-group">
            <button type="submit">Рассчитать</button>
            <div className="contact-number">
              <p>или звоните:</p>
              <p>+998 90 000-00-00</p>
            </div>
          </div>
        </form>
      </div>
      {data?.src ?<img className="hero-img" src={`${data?.src}`} alt="hero truck" /> :  " "}
    </div>
  );
};

export default HeroSection;
