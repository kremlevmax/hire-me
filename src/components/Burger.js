import React from "react";
import "./Burger.css";

const Burger = ({ burger, setBurger }) => {
  const burgerStyle = burger
    ? "burger burger--vortex is-active"
    : "burger burger--vortex";

  return (
    <button className={burgerStyle} onClick={() => setBurger(!burger)}>
      <span className='burger-box'>
        <span className='burger-inner'></span>
      </span>
    </button>
  );
};

export default Burger;
