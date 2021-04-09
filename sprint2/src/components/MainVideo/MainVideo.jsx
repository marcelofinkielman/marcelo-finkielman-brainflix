import React from 'react'
import './MainVideo.scss'


function MainVideo( { video } ) {
  console.log ({video})
  return (
    <>
    
    <div className='main'>
      <div className='main__background'>
        <video poster={video} className="main__heroPicture" controls>
        </video>
      </div>
    </div>
    </>
  )
}

export default MainVideo
