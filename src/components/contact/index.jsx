"use client"

import React, { useState } from "react";
import "./style.scss";

const ContactSection = () => {
  const [inputValue , setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue((+e.target.value).toString()  === "NaN")
  }

  console.log(inputValue);
  return (
    <div className="contact-content container">
      <div className="contact-infos">
        <h1>Свяжитесь с нами</h1>
        <p>
          We are offering the 5 types of delivery trucks. You can choose the
          truck which suits. How much type of truck your company
        </p>
        <form action="">
          <input  type="text" required placeholder="Ваша Имя" />
          <div className="input-group">
            <div className={inputValue ? "error select-box"  : "select-box"}>
              <select className="select-code" name="" id="">
                <option value="1">+998</option>
                <option value="2">+718</option>
                <option value="3">+123</option>
              </select>
            </div>
            <input className={inputValue ? "error input"  : "input"}  onChange={handleInput} pattern="\d+"  type="tel"  required placeholder="99 999 99 99" />
          </div>
          <button type="submit">Оставить зайавку</button>
        </form>
      </div>
      <img className="contact-card" src="/contact-img.png" />
    </div>
  );
};

export default ContactSection;
