import React from "react";
import "./style.scss";

const HeroSection = ({ data }) => {
  return (
    <div className="hero-content container">
      <div className="hero-infos">
        <h1>{data?.h1}</h1>
        <p>{data?.p}</p>
        <form className="form-group">
          <input className="input" type="text" placeholder={data?.pl1} required />
          <input
            className="input"
            type={data?.pl2 === "Номер" ? "number"  : "text"}
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
      <div className="hero-img-content">
      {data?.src ?<img className="hero-img" src={`${data?.src}`} alt="hero truck" /> :  " "}
      </div>
    </div>
  );
};

export default HeroSection;
