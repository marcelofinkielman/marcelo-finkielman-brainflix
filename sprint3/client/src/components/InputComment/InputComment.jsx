import React from 'react'
import './InputComment.scss'
import Profile from "../../assets/images/Mohan-muruge.jpg"

function InputComment(props) {
  const handleOnComment = (e) => {
    e.preventDefault();
    alert('Comment added!')
  }
  return (
    <div className='comments'>
      <form className='comments__form'
        onSubmit={(e) => {
          handleOnComment(e)
        }}
      >
        <div className='comments__div-profile'>
          <img src={Profile} alt='Profile' className='comments__profile' />
        </div>
        <div className='comments__div-comments'>
          <div className='comments__label-and-input'>
            <label className='comments__label-comments' >
            JOIN THE CONVERSATION 
            </label>
            <textarea className='comments__input' placeholder='Write comment here.'></textarea>
          </div>
          <button className='comments__comment-button'>COMMENT</button>
        </div>
      </form>
    </div>
  )
}

export default InputComment
