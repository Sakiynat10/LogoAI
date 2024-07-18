"use client"

import React, { useState } from "react";
import "./style.scss"
import  NavLink  from "../navlink";

const Header = () => {
  const [menu , setMenu] = useState(false);

  const changeMenu = () => {
    setMenu(!menu)
  }
  return (
    <header>
      <nav className={menu ? "menu-nav "  : "menu-top menu-nav"}>
      <ul>
            <li>
              <NavLink onClick={changeMenu} href="/">Грузооотправителям</NavLink>
            </li>
            <li>
              <NavLink onClick={changeMenu} href="/carriers">Перевозчикам</NavLink>
            </li>
            <li>
              <NavLink onClick={changeMenu} href="/dispatchers">Диспетчерам</NavLink>
            </li>
          </ul>
      </nav>
      <nav className=" nav-container container">
        <div className="nav-left">
          <NavLink href="/">
            <p>Get<span>it</span></p>
          </NavLink>
          <ul>
            <li>
              <NavLink href="/">Грузооотправителям</NavLink>
            </li>
            <li>
              <NavLink href="/carriers">Перевозчикам</NavLink>
            </li>
            <li>
              <NavLink href="/dispatchers">Диспетчерам</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
        <NavLink href="#" className="nav-right-btn">
        Заказать
        </NavLink>
        <button onClick={changeMenu} >
          <img className={menu ? "menu none" : "menu"} src="/menu.svg" alt="menu" />
          <img className={menu ? "close" : "none close"} src="/close.svg" alt="menu" />
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
