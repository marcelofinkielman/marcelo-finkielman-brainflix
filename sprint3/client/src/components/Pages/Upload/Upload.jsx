import axios from 'axios';
import React from 'react'
import Bike from '../../../assets/images/Upload-video-preview.jpg'
import './Upload.scss'



let APIUrl = "http://localhost:8080"
let endPoint = "/videos"

class Upload extends React.Component {
  //event makes the publish and cancel button to go back to the home page, with the default video.

  state = {
    description: "",
    title: "",
  }

  render() {

    const handleOnSubmit = (e) => {
      e.preventDefault();
      axios.post(APIUrl + endPoint, {
        image: '/client/src/assets/images/Upload-video-preview.jpg',
        title: e.target.title.value,
        comment: e.target.comment.value,
      })
        .then(res => {
          console.log(res.data);
          this.props.history.push('/')
          alert('Video Updated. Back to the home page')
        })
    };

    const cancelOnClick = (e) => {
      this.props.history.push('/')
    };

    return (
      <>
        <div className='line'></div>
        <div className='upload'>
          <h1 className='upload__title'>Upload Video</h1>
          <div className='upload__image-and-form'>
            <div className='upload__image-and-label'>
              <label className='upload__label'>VIDEO THUMBNAIL</label>
              <img className='upload__image' src={Bike} alt='bike' />
            </div>
            <form className='upload__form'
              onSubmit={(e) => {
                handleOnSubmit(e)
              }}
            >
              <div className='upload__input-boxes'>
                <label className='upload__label'>TITLE YOUR VIDEO</label>
                <input name='title' className='upload__text-box' type="text" placeholder='Add a title to your video' value={this.state.title} onChange={(e) => {
                  this.setState({ title: e.target.value })
                }} />

                <label className='upload__label'> ADD A VIDEO DESCRIPTION</label>
                <textarea name='comment' className='upload__text-area' cols='15' placeholder='Add a description of your video' value={this.state.description} onChange={(e) => {
                  this.setState({ description: e.target.value })
                }}></textarea>
              </div>
              <div className='upload__buttons'>
                <button type='submit' className='upload__publish-button'><h4>PUBLISH</h4></button>
                {/* <p> {this.state.description} </p>
                  <p> {this.state.title} </p> */}
                <button type='button' onClick={(e) => { cancelOnClick(e) }} className='upload__cancel-button'><h4>CANCEL</h4></button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Upload
