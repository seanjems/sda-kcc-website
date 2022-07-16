import React from "react";
import "./Footer.css";
import LogoClean from "../../assets/SDA-Logo.png";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container" id="more">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Receive news and updates from SDA Kampala central church via email.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="new-btn">Subscribe</button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Useful Links</h2>
            <div className="LinkDiv">Church bulletin</div>
            <div className="LinkDiv">Live stream</div>
            <div className="LinkDiv">Events</div>
            <div className="LinkDiv">Church Projects</div>
            <div className="LinkDiv">Families</div>
            <div className="LinkDiv">Tithe and Offertory</div>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <div className="LinkDiv">Contact</div>
            <div className="LinkDiv">Support/Donate</div>
            <div className="LinkDiv">About us</div>
            <div className="LinkDiv">Location</div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Media</h2>
            <div className="LinkDiv">Sermons Archive</div>
            <div className="LinkDiv">Music</div>
            <div className="LinkDiv">Galary/Updates</div>
            <div className="LinkDiv">Podcasts</div>
            <div className="LinkDiv">Articles</div>
            <div className="LinkDiv">Book Library</div>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <div className="LinkDiv">Instagram</div>
            <div className="LinkDiv">Facebook</div>
            <div className="LinkDiv">Youtube</div>
            <div className="LinkDiv">Twitter</div>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <div className="social-logo">
              SDA KCC
              <img src={LogoClean} alt="" />
            </div>
          </div>
          <small class="website-rights">SDA KCC © 2022</small>
          <div class="social-icons">
            <div
              class="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </div>
            <div
              class="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </div>
            <div
              class="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </div>
            <div
              class="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </div>
            <div
              class="social-icon-link twitter"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
