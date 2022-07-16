import React from "react";
import "./Header.css";
import SdaLogo from "../../assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="Header">
      <div className="logoWithText">
        <img src={SdaLogo} alt="" className="left-logo" /> <span>SDAKCC</span>
      </div>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="socialmedia" spy={true} smooth={true}>
            Social Media
          </Link>
        </li>
        <li>
          <Link to="departments" spy={true} smooth={true}>
            Departments
          </Link>
        </li>
        <li>
          <Link to="offertory" spy={true} smooth={true}>
            Offertory & Donations
          </Link>
        </li>
        <li>
          <Link to="more" spy={true} smooth={true}>
            More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
