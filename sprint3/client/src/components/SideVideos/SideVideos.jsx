import React from 'react'
import './SideVideos.scss'

function SideVideos({ image, title, channel }) {
  return (
    <div className='sideVideos__side-video'>
      <div className='sideVideos__video'>
        <img width='50px' alt='next videos' src={image} className='sideVideos__img'></img>
      </div>
      <div className='sideVideos__title-and-channel'>
        <h3 className="sideVideos__video-title">{title}</h3>
        <p className="sideVideos__video-channel">{channel}</p>
      </div>
    </div>
  )
}

export default SideVideos
