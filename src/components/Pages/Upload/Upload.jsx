import React from 'react'
import Bike from '../../../assets/images/Upload-video-preview.jpg'
import './Upload.scss'

function Upload() {
  return (
    <div className='upload'>
      <h1 className='upload__title'>Upload Video</h1>
      <div className='upload__image-and-form'>
        <div className='upload__image-and-label'>
          <label className='upload__label'>VIDEO THUMBNAIL</label>
          <img className='upload__image' src={Bike} alt='bike'></img>
        </div>
        <form className='upload__form'>
          <div className='upload__input-boxes'>
            <label className='upload__label'>TITLE YOUR VIDEO</label>
            <input className='upload__text-box' type="text" placeholder='Add a title to your video'></input>
            <label className='upload__label'> ADD A VIDEO DESCRIPTION</label>
            <textarea className='upload__text-area' cols='15' placeholder='Add a description of your video'></textarea>
          </div>
        </form>
      </div>
      <div className='upload_buttons'>
        <button className='upload__publish-button'>PUBLISH</button>
        <button className='upload__cancel-button'>CANCEL</button>
      </div>

    </div>
  )
}

export default Upload
