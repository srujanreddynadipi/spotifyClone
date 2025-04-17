import React from 'react'
import "./ArtistSpecificPage.css"

const ArtistSpecificPage = ({currentArtEle}) => {
  return (
    <div>
      {currentArtEle ? (
        <div className="ArtistSpecificPage">
          <img src={currentArtEle.imgsrc} alt={currentArtEle.heading || ""} />
          <h2>{currentArtEle.heading}</h2>
          <p>{currentArtEle.subheading}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ArtistSpecificPage
