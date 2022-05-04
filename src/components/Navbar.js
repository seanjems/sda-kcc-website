import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SDAKCC
            <i className="fa-solid fa-book-bible"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/departments"
                className="nav-links"
                onClick={closeMobileMenu}>
                Departments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/families"
                className="nav-links"
                onClick={closeMobileMenu}>
                Families
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/more" className="nav-links" onClick={closeMobileMenu}>
                More
              </Link>
            </li>

            {!button && (
              <Button
                buttonStyle="btn--outline"
                className="nav-links"
                onClick={closeMobileMenu}
                style>
                OFFERTORY/DONATIONS
              </Button>
            )}
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" className="nav-links">
              OFFERTORY/DONATIONS
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
