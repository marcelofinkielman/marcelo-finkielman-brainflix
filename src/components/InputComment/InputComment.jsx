import React from 'react'
import './InputComment.scss'
import Profile from "../../assets/images/Mohan-muruge.jpg"

function InputComment() {
  return (
    <div className='comments'>
      <form className='comments__form'>
        <div className='comments__divProfile'>
          <img src={Profile} alt='Muhan' className='comments__profile' />
        </div>
        <div className='comments__divComments'>
          <div className='comments__labelAndInput'>
            <label className='comments__labelComments' >JOIN THE CONVERSATION </label>
            <textarea className='comments__input' placeholder='Write comment here'></textarea>
          </div>

          <button className='comments__commentButton'>COMMENT</button>
        </div>
      </form>
    </div>

  )
}

export default InputComment
