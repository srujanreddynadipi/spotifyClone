import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
//  import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-left">
        {/* Navigation arrows */}
        {/* <div className="nav-arrows">
          <FontAwesomeIcon icon={faChevronLeft} className="nav-arrow" />
          <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
        </div> */}
        
        {/* Spotify Logo */}
        <div className="spotify-logo">
          <svg viewBox="0 0 24 24" width="38" height="38" fill="white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
        
        {/* Home Icon */}
        <div 
          className={`nav-icon ${activeIcon === "home" ? "active" : ""}`}
          onClick={() => setActiveIcon("home")}
        >
          <FontAwesomeIcon icon={faHome} />
        </div>

        {/* Search Icon */}
        <div 
          className={`nav-icon ${activeIcon === "search" ? "active" : ""}`}
          onClick={() => setActiveIcon("search")}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="What do you want to play?" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="nav-right">
        <button className="install-btn">Premium</button>
        <button className="install-btn">Download</button>
        <button className="install-btn">support</button>
        <span>|</span>
        <button className="install-btn">Install App</button>
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;