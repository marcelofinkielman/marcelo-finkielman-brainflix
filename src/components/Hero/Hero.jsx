import React from 'react'
import "./Hero.scss"
import Likes from "../../assets/icons/Icon-likes.svg"
import Views from "../../assets/icons/Icon-views.svg"



function Hero({ video }) {
  const videoDate = new Date(video.timestamp) 
 
  return (
    
    <div>
      <video poster={video.image} className="Hero" controls>
      </video>
      <h1>{video.title}</h1>
      <div>
        <h2>By {video.channel}</h2>
       <h2>{videoDate.toLocaleDateString()}</h2>
      </div>
      <div>
        <img src={Views} alt='views'/> {video.views}
        <img src={Likes} alt='likes'/>{video.likes}
      </div>
      <div>
      {video.description}
      </div>
      <h3>3 COMMENTS</h3>
      
    </div>
  )
}

export default Hero
