import React from 'react'
import './PopularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtist = ({setcurrentPage ,setcurrentArtEle}) => {
  return (
    <div className="popularArtistMainContainer">
    <span>Popular Artist</span>
    <ArtistCard setcurrentPage={setcurrentPage} setcurrentArtEle={setcurrentArtEle}/>
    </div>
  )
}

export default PopularArtist
