import React from "react";
import "./SpecificMusicFile.css";

const SpecificMusicFile = ({ currentEle }) => {
  return (
    <div>
      {currentEle ? (
        <div className="musicSpecificContainer">
          <div className="musicHeader">
            <div className="albumCover">
              <img src={currentEle.imgsrc} alt={currentEle.heading || ""} />
            </div>
            <div className="songInfo">
              <span className="songType">Single</span>
              <h1>{currentEle.heading}</h1>
              <div className="songDetails">
                <img src={currentEle.imgsrc} alt="Artist" />
                <span>{currentEle.heading}</span>
                {/* <span className="dot">•</span> */}
                <span>2023</span>
                {/* <span className="dot">•</span> */}
                <span>1 song, 2 min 27 sec</span>
              </div>
            </div>
          </div>
          
          <div className="actionButtons">
            <button className="playButton">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M8 5v14l11-7z" fill="black"/>
              </svg>
            </button>
            <button className="likeButton">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="white"/>
              </svg>
            </button>
            <button className="moreButton">•••</button>
          </div>
          
          <div className="lyricsSection">
            <h2>Lyrics</h2>
            <div className="lyrics">
              {currentEle.subheading}
              {/* Lyrics would go here */}
              Verse 1
              Lorem ipsum dolor sit amet
              Consectetur adipiscing elit
              
              Chorus
              Sed do eiusmod tempor incididunt
              Ut labore et dolore magna aliqua
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default SpecificMusicFile;
