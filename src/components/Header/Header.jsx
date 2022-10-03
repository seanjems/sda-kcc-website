import React from "react";
import "./Header.css";
import SdaLogo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";
const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="Header">
      <div className="logoWithText">
        <img src={SdaLogo} alt="" className="left-logo" /> <span>SDAKCC</span>
      </div>
      <img
        src={Bars}
        alt=""
        className="mobileMenuBtn"
        onClick={() => setMenuVisible(!menuVisible)}
      />
      {menuVisible && (
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMenuVisible(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="socialmedia"
              spy={true}
              smooth={true}
              onClick={() => setMenuVisible(false)}
            >
              Social Media
            </Link>
          </li>
          <li onClick={() => setMenuVisible(false)}>
            <Link
              to="departments"
              spy={true}
              smooth={true}
              onClick={() => setMenuVisible(false)}
            >
              Departments
            </Link>
          </li>
          <li>
            <Link
              to="offertory"
              spy={true}
              smooth={true}
              onClick={() => setMenuVisible(false)}
            >
              Offertory & Donations
            </Link>
          </li>
          <li>
            <Link
              to="more"
              spy={true}
              smooth={true}
              onClick={() => setMenuVisible(false)}
            >
              More
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
