import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/needypeople">
                Needy People
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/donators">
                Donators
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/partners">
                Partners
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/deliveryagents">
                Delivery Agents
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
          
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
              
            </Link>
          </div>
          <ul className="navbar__links">
          
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="needypeople-link" to="/needypeople">
                Needy People
              </Link>
            </li>
            <li>
              {" "}
              <Link className="donators-link" to="/donators">
                Donators
              </Link>
            </li>
            <li>
              {" "}
              <Link className="partners-link" to="/partners">
                Partners
              </Link>
            </li>
            <li>
              {" "}
              <Link className="deliveryagents-link" to="/deliveryagents">
                Delivery Agents
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
