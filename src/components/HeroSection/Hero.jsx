import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import LogoClean from "../../assets/SDA-Logo.png";
import hero_image_back from "../../assets/hero_image_back.png";
import hero_image from "../../assets/img1.png";

import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import Iframe from "@nicholasadamou/react-iframe";
import FsLightbox from "fslightbox-react";
import { IconPlayerPlay, IconShoppingCart } from "@tabler/icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { Modal } from "@mantine/core";
const Hero = () => {
  const transition = { type: "spring", duration: 4 };

  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const token =
    localStorage.getItem("token") ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoie1wiRW1haWxcIjpcInNlYW5qZW1zQGdtYWlsLmNvbVwiLFwiRnVsbE5hbWVcIjpcIk5hanVuYSBKYW1lc1wiLFwiRmlyc3ROYW1lXCI6XCJOYWp1bmFcIixcIkxhc3ROYW1lXCI6XCJKYW1lc1wiLFwiVXNlcklkXCI6XCJmM2Y4NzlkNS1lYWMwLTRjYjgtYjA3ZS0yOTUzNmVlYjA3OTFcIixcIlRlbmFudElkXCI6bnVsbCxcIlJvbGVcIjpudWxsLFwiUGFja2FnZVwiOm51bGx9IiwiUGFja2FnZSI6ImltcGVyaWFsIiwiZXhwIjoxNjcwMDcwNTI0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MjA0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyMDQvIn0.B2NkcNRV2sqr3ygSOcQsNGa1jfY5ssAiehe5H8_WM3c";

  return (
    <div className="Hero" id="home">
      <div className="left-h">
        <FsLightbox
          toggler={toggler}
          sources={[
            <iframe
              src={`http://stream.kampalacentraladventist.org/view?access_key_value_temp_refresh=${token}`}
              title="Owncast"
              height="1080"
              width="1920"
              referrerpolicy="*"
              scrolling="no"
              allow="autoplay; fullscreen"
            ></iframe>,
          ]}
        />

        <Header />
        <div className="blur heroBlur"></div>
        {/* Thank you for visiting text */}
        <div className="animating-ad">
          <motion.div
            initial={{ right: "8px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>
            Thank you for visiting Sda Kampala central. You are welcome.
          </span>
        </div>

        {/* Livestream video lightbox */}
        <div class="container">
          <div class="row align-items-center justify-content-start">
            <div class="col-lg-5">
              <h1 class="heading" data-aos="fade-up">
                Thank you for worshiping with us
              </h1>
              {/* <p class="mb-5" data-aos="fade-up">
                We are live and when ever we are live, you can always come here
                to watch our stream. Just click the watch now button to start
                the stream.
              </p> */}
              <p>
                NOTE: The Ambassodors of Christ home coming will be streamed
                live on this page. Stay tuned for an e-Ticket to watch the event
                live.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => setToggler(!toggler)}
              >
                <IconPlayerPlay
                  size={30}
                  strokeWidth={2}
                  color={"white"}
                  style={{ marginRight: "1rem" }}
                />
                Watch Live
              </button>
              <button
                className="btn btn-success"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setToggler(!toggler)}
              >
                <IconShoppingCart
                  size={30}
                  strokeWidth={2}
                  color={"white"}
                  style={{ marginRight: "1rem" }}
                />
                Buy eTicket
              </button>
            </div>
          </div>
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
          <a href="https://social.kampalacentraladventist.org/home">
            <button className="new-btn">Connect</button>
          </a>

          <Link to="offertory" spy={true} smooth={true}>
            <button className="new-btn">E-giving</button>
          </Link>
        </div>

        {/* Right side */}
      </div>

      <div className="right-h">
        <a href="https://social.kampalacentraladventist.org">
          <button className="new-btn">Login</button>
        </a>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ left: "0rem" }}
          whileInView={{ left: "-13rem" }}
          transition={transition}
        />
        <motion.img
          src={LogoClean}
          alt=""
          className="logoClean"
          initial={{ right: "-3rem" }}
          whileInView={{ right: "2rem" }}
          transition={{ ...transition, type: "tween ", duration: 3 }}
        />
      </div>
    </div>
  );
};

export default Hero;
