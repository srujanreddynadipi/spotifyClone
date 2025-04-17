import React from "react";
import "./ArtistSpecificPage.css";

const ArtistSpecificPage = ({ currentArtEle }) => {
  return (
    <div>
      {currentArtEle ? (
        <div className="artistSpecificContainer">
          <div className="artistHeader">
            <div className="artistImage">
              <img src={currentArtEle.imgsrc} alt={currentArtEle.heading || ""} />
            </div>
            <div className="artistInfo">
              <span className="artistType">Artist</span>
              <h1>{currentArtEle.heading}</h1>
              <p className="artistStats">Monthly Listeners • 2023 • 10 songs, 35 min 27 sec</p>
            </div>
          </div>
          
          <div className="actionButtons">
            <button className="playButton">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M8 5v14l11-7z" fill="black"/>
              </svg>
            </button>
            <button className="followButton">Follow</button>
            <button className="moreButton">•••</button>
          </div>
          
          <div className="popularSection">
            <h2>Popular</h2>
            <div className="songList">
              <div className="songItem">
                <div className="songNumber">1</div>
                <div className="songInfo">
                  <img src={currentArtEle.imgsrc} alt="Song" className="songImage" />
                  <div className="songDetails">
                    <h3>Pal Pal</h3>
                    <p>2:27</p>
                  </div>
                </div>
              </div>
              {/* More songs would be mapped here */}
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default ArtistSpecificPage;
