import React from "react";
import { Button } from "../components/Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/kara-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link className="footer-logo" to="/">
        <img src={logo} alt="Kara Logo" />
      </Link>
      <section className="footer-subs">
        <p className="footer-subs-heading">
          Join the KARA Newsletter to recieve out best accomodation deals.
        </p>
        <p className="footer-subs-text">Unsubscribe anytime.</p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              className="footer-input"
              placeholder="Enter your Email"
            />
            <Button buttonStyle="btn-outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>
      <small class="website-rights">KARA © 2023</small>
    </div>
  );
};

export default Footer;
