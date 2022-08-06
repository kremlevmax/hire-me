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
              <NavLink className='navbar__menu-link-cat' to='/'>
                <FontAwesomeIcon icon={faCat} />
              </NavLink>
            </picture>
          </div>
          <div className='navbar__menu-container'>
            <div className='navbar__menu'>
              <div className='navbar__menu-item'>
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
              </div>
              <div className='navbar__menu-item'>
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
              </div>
              <div className='navbar__menu-item'>
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
