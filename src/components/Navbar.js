import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome//free-brands-svg-icons";
import Burger from "./Burger";
import { useEffect } from "react";

function Navbar() {
  const [burger, setBurger] = useState(false);
  const location = useLocation();

  const menuClasses = burger ? "navbar__menu open" : "closed navbar__menu";

  useEffect(() => {
    if (burger) {
      setBurger(false);
    }
  }, [location]);

  return (
    <>
      <header className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__menu-container'>
            <div className='navbar__social-links'>
              <div className='navbar__social-link'>
                <a
                  className='navbar__social-link__a'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/kremlevmax'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className='navbar__social-link'>
                <a
                  className='navbar__social-link__a'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/max-kremlev/'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <Burger burger={burger} setBurger={setBurger} />
            <div className={menuClasses}>
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
