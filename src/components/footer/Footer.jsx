import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="spotify-footer">
      <div className="footer-content">
        <div className="footer-text">
          <span className="footer-title">Preview of Spotify</span>
          <p className="footer-subtitle">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className="footer-cta">
          <button className="signup-btn">Sign up for free</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;