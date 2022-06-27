import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__logo-container'>
            <picture className='navbar__logo'>
              <FontAwesomeIcon icon={faCat} />
            </picture>
          </div>
          <nav className='navbar__menu-container'>
            <ul className='navbar__menu'>
              <li className='navbar__menu-item'>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "navbar__menu-link-active"
                      : "navbar__menu-link"
                  }
                  to='/'
                >
                  About me
                </NavLink>
              </li>
              <li className='navbar__menu-item'>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "navbar__menu-link-active"
                      : "navbar__menu-link"
                  }
                  to='/portfolio'
                >
                  Portfolio
                </NavLink>
              </li>
              <li className='navbar__menu-item'>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "navbar__menu-link-active"
                      : "navbar__menu-link"
                  }
                  to='/contacts'
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
