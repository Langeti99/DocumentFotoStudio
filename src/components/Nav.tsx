import React from "react";
import logo from "./../img/Logo.png";

function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <div className="Nav-wrapper">
          <div className="logo">
            <a href="./">
              <img src={logo} className="logo" alt="logo" />
            </a>
          </div>
          <ul className="Nav-menu">
            <a href="./index.html">
              <li>Головна</li>
            </a>
            <a href="./index.html">
              <li>Фото</li>
            </a>
            <a href="./index.html">
              <li>Про нас</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
