import React from 'react'
import "../../components/Hero/Hero.scss"
import Likes from "../../assets/icons/Icon-likes.svg"

function HeroImage({video}) {
  return (
    <div>
      <video poster={video.image} className="heroImage"controls>
      </video>
      <h1>{video.title}</h1>
     <img src={Likes} alt='Likes'/>{video.likes}
    </div>
  )
}

export default HeroImage
