import React from 'react'
import "./Hero.scss"
import Likes from "../../assets/icons/Icon-likes.svg"
import Views from "../../assets/icons/Icon-views.svg"
import MainVideo from "../MainVideo/MainVideo"



function Hero({ video }) {
  const videoDate = new Date(video.timestamp)
console.log ({video})
  return (
    <div className='hero'>
    <MainVideo video={video}/>
      <div className="hero__videoDescription">
        <h1 className="hero__title">{video.title}</h1>
        <div className="hero__channelDateViewsLikes">
          <div className='hero__channelAndDate'>
            <h3 className="hero__channel">By {video.channel}</h3>
            <p className="hero__date">{videoDate.toLocaleDateString()}</p>
          </div>
          <div className="hero__viewsAndLikes">
            <div className='hero__iconAndNumber1'>
              <img src={Views} alt='views' className="hero__viewsIcon" /> <span className='hero__views'>{video.views}</span>
            </div>
            <div className='hero__iconAndNumber2'>
              <img src={Likes} alt='likes' className="hero__likesIcon" /> <span className='hero__likes'>{video.likes}</span>
            </div>
          </div>
        </div>
        <div className='hero__description'>
          {video.description}
        </div>
        <h3>3 COMMENTS</h3>
      </div>



    </div>
  )
}

export default Hero
