import React from 'react'
import Bike from '../../../assets/images/Upload-video-preview.jpg'
import './Upload.scss'

function Upload(props) {
  //event makes the publish and cancel button to go back to the home page, with the default video.
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Back to the home page')
    props.history.push('/')
  }
  return (
    <>
      <div className='line'></div>
      <div className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='upload__image-and-form'>
          <div className='upload__image-and-label'>
            <label className='upload__label'>VIDEO THUMBNAIL</label>
            <img className='upload__image' src={Bike} alt='bike'/>
          </div>
          <form className='upload__form'
            onSubmit={(e) => {
              handleOnSubmit(e)
            }}
          >
            <div className='upload__input-boxes'>
              <label className='upload__label'>TITLE YOUR VIDEO</label>
              <input className='upload__text-box' type="text" placeholder='Add a title to your video'></input>
              <label className='upload__label'> ADD A VIDEO DESCRIPTION</label>
              <textarea className='upload__text-area' cols='15' placeholder='Add a description of your video'></textarea>
            </div>
            <div className='upload__buttons'>
              <button className='upload__publish-button'><h4>PUBLISH</h4></button>
              <button className='upload__cancel-button'><h4>CANCEL</h4></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Upload
