import React from "react";
import logoWhite from "../assets/logo-white.png";
import userImage from "../assets/user-1.jpg";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="#" className="nav__el">
          All tours
        </a>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use href="assets/icons.svg"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src={logoWhite} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <a href="#" className="nav__el">
          My bookings
        </a>
        <a href="#" className="nav__el">
          <img src={userImage} alt="User photo" className="nav__user-img" />
          <span>Jonas</span>
        </a>

        <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
  );
};
export default Navbar;
