import React from "react";
import "./style.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top-content">
          <a className="footer-logo" href="/home">
            <img src="/logo-icon.svg" alt="logo" />
            <p>
              LOGO<span>AI</span>
            </p>
          </a>
          <ul>
            <li>
              <a href="#">Грузооотправителям</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">Мои заказы</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Перевозчикам</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Диспетчерам</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">(555) 555-1234</a>
            </li>
            <li>
              <a href="#">logistics@gmail.com</a>
            </li>
          </ul>
          <ul className="footer-medias">
            <li>
              <a href="#">
                <img src="/media-1.svg" alt="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/media-2.svg" alt="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/media-3.svg" alt="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/media-4.svg" alt="svg" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-content">
          <ul>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Design by: <span>Getter</span></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
