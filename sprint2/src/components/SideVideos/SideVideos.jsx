import React from 'react'
import './SideVideos.scss'

function SideVideos({ image, title, channel, id, updateVideo}) {
  return (
    <div className='sideVideos__sideVideo'>
      <div className='sideVideos__video'>
        <img width='50px' alt='sideVideo' src={image} className='sideVideos__img'></img>
      </div>

      <div className='sideVideos__titleAndChannel'>
        <h3 className="sideVideos__videoTitle">{title}</h3>
        <p className="sideVideos__videoChannel">{channel}</p>
      </div>

    </div>
  )
}


export default SideVideos
