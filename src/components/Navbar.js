import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo-container'>
          <picture className='navbar__logo'>
            <FontAwesomeIcon icon={faCat} />
          </picture>
        </div>
        <nav className='navbar__menu-container'>
          <ul className='navbar__menu'>
            <li className='navbar__menu-item'>About</li>
            <li className='navbar__menu-item'>Portfolio</li>
            <li className='navbar__menu-item'>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
