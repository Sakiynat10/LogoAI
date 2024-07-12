"use client"

import React from "react";
import "./style.scss"
import  NavLink  from "../navlink";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-left">
          <NavLink href="/">
            <img src="/logo-icon.svg" alt="logo" />
            <p>LOGO<span>AI</span></p>
          </NavLink>
          <ul>
            <li>
              <NavLink href="/">Грузооотправителям</NavLink>
            </li>
            <li>
              <NavLink href="/about">Перевозчикам</NavLink>
            </li>
            <li>
              <NavLink href="/clients">Диспетчерам</NavLink>
            </li>
          </ul>
        </div>
        <NavLink href="#" className="nav-right">
        Заказать
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
