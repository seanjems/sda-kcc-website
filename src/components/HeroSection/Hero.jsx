import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import LogoClean from "../../assets/SDA-Logo.png";
import hero_image_back from "../../assets/hero_image_back.png";
import hero_image from "../../assets/img1.png";
const Hero = () => {
  return (
    <div className="Hero" id="home">
      <div className="left-h">
        <Header />
        <div className="blur heroBlur"></div>
        {/* Thank you for visiting text */}
        <div className="animating-ad">
          <div></div>
          <span>
            Thank you for visiting Sda Kampala central. You are welcome.
          </span>
        </div>

        {/* Hero Heading */}
        <div className="heroHeading">
          <div>
            <span className="stroke-text">connect, </span>
            <span> come </span>
          </div>

          <div>
            {" "}
            <span>
              visit or <span className="stroke-text">worship</span> with us
            </span>
          </div>
          <div>
            <span>
              <span>Connect</span> with fellow church members via our unique
              social media site. We are also on all the major social platforms.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+730 </span>
            <span>Members connected</span>
          </div>
          <div>
            <span>+13</span>
            <span>clan families</span>
          </div>
          <div>
            <span>+20</span>
            <span>church department</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-button">
          <button className="new-btn">Connect</button>
          <button className="new-btn">E-giving</button>
        </div>

        {/* Right side */}
      </div>

      <div className="right-h">
        <button className="new-btn">Login</button>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <img src={LogoClean} alt="" className="logoClean" />
      </div>
    </div>
  );
};

export default Hero;
