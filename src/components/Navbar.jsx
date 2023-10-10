import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kara-logo.png";
import "../components/Navbar.css";
import { Button } from "./Button";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMenu = () => {
    setClicked(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Kara Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/amenities" className="nav-links" onClick={closeMenu}>
                Amenities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
