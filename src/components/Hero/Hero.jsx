import React from 'react'
import "../../components/Hero/Hero.scss"
import Likes from "../../assets/icons/Icon-likes.svg"
import Views from "../../assets/icons/Icon-views.svg"
import SideVideos from '../SideVideos/SideVideos'


function HeroImage({ video }) {
  return (
    
    <div>
      <video poster={video.image} className="heroImage" controls>
      </video>
      <h1>{video.title}</h1>
      <div>
        <h2>{video.channel}</h2>
       <h2>{video.timestamp}</h2>
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

export default HeroImage
