import React from "react";
import logoWhite from "../../assets/logo-white.png";
import userImage from "../../assets/users/default.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../component/Footer";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src={logoWhite} alt="Natours logo" />
        </div>
        <nav className="nav nav--tours">
          <Link to={"/"} className="nav__el">
            All tours
          </Link>
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
        <nav className="nav nav--user">
          <Link to={"/booking"} className="nav__el">
            My bookings
          </Link>
          <Link to={"/profile"} className="nav__el">
            <img src={userImage} alt="User photo" className="nav__user-img" />
            <span>Pooria </span>
          </Link>

          <Link to={"/login"} className="nav__el">
            Log in
          </Link>
          <Link to={"/signup"} className="nav__el nav__el--cta">
            Sign up
          </Link>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
