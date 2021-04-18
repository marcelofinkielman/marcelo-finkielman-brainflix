import React from 'react'
import "./Hero.scss"
import Likes from "../../assets/icons/Icon-likes.svg"
import Views from "../../assets/icons/Icon-views.svg"

//test
//hero section is every detail about the videos (main video has its own section)
function Hero({ video }) {
  const videoDate = new Date(video.timestamp)
console.log ({video})
  return (
    <div className='hero'>
    
      <div className="hero__video-description">
        <h1 className="hero__title">{video.title}</h1>
        <div className="hero__channelDateViewsLikes">
          <div className='hero__channel-date'>
            <h3 className="hero__channel">By {video.channel}</h3>
            <p className="hero__date">{videoDate.toLocaleDateString()}</p>
          </div>
          <div className="hero__views-likes">
            <div className='hero__icon-and-number-1'>
              <img src={Views} alt='views' className="hero__views-icon" /> <span className='hero__views'>{video.views}</span>
            </div>
            <div className='hero__icon-and-number-2'>
              <img src={Likes} alt='likes' className="hero__likes-icon" /> <span className='hero__likes'>{video.likes}</span>
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
