import React from 'react'
import './PopularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtist = () => {
  return (
    <div className="popularArtistMainContainer">
    <span>Popular Artist</span>
    <ArtistCard/>
    </div>
  )
}

export default PopularArtist
