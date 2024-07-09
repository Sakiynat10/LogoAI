"use client"

import React from "react";
import "./style.scss"

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-left">
          <a href="/">
            <img src="/logo-icon.svg" alt="logo" />
            <p>LOGO<span>AI</span></p>
          </a>
          <ul>
            <li>
              <a href="/about">Грузооотправителям</a>
            </li>
            <li>
              <a href="/vacancy">Перевозчикам</a>
            </li>
            <li>
              <a href="#">Диспетчерам</a>
            </li>
          </ul>
        </div>
        <a href="#" className="nav-right">
        Заказать
        </a>
      </nav>
    </header>
  );
};

export default Header;
