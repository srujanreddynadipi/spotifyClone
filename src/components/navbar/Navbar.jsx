import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
//  import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-buttons">
          <button className="nav-btn">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="nav-right">
        <button className="install-btn">Install App</button>
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
