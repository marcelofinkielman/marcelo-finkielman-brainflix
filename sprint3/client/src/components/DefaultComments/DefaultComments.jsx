import React from 'react'
import Profile from "../../assets/images/Mohan-muruge.jpg"
import "./DefaultComments.scss"

function DefaultComments({ mainVideo }) {
  return (
    <div>
      {!!mainVideo.comments && mainVideo.comments.map((comment) => {
        const commentDate = new Date(comment.timestamp);
        return (
          <>
            <div className="DefaultComments">
              <div className='DefaultComments__profile-container'>
                <img src={Profile} alt='Muhan' className='comments__profile' />
              </div>
              <div>
                <div className='DefaultComments__name-date'>
                  <h4 className='DefaultComments__name'>{comment.name}</h4>
                  <span className="DefaultComments__date">{commentDate.toLocaleDateString()}</span>
                </div>
                <p className='DefaultComments__comment'>{comment.comment}</p>
              </div>
            </div>
          </>
        )
      })}
    </div>

  )
}
export default DefaultComments

