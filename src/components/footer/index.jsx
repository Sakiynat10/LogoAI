import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-outer footer-outer">
        <div className="container">
          <div className="footer-top-content">
            <div className="footer-left">
              <a className="footer-logo" href="/home">
                <p>
                  Get <span> it</span>
                </p>
              </a>
              <ul>
                <li>
                  <a href="/about">Грузооотправителям</a>
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
                  <a href="/vacancy">Перевозчикам</a>
                </li>
                <li>
                  <a href="/clients/#vacancy">Вакансии</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/clients">Диспетчерам</a>
                </li>
                <li>
                  <a href="/clients/#vacancy">Вакансии</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">О компании</a>
                </li>
                <li>
                  <a href="/clients/#vacancy">Вакансии</a>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              <ul>
                <li>
                  <a className="contact-subtitle" href="/#contact">Контакты</a>
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
          </div>
          <div className="footer-bottom-content">
            <ul>
              <li>
                <p className="footer-bottom-title">Privacy Policy</p>
              </li>
              <li>
                <p className="footer-bottom-title">Privacy Policy</p>
              </li>
            </ul>
            <ul>
              <li>
                <p className="bottom-right-title">
                  Design by: <span>Getter</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
