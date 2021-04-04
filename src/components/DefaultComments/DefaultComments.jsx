import React from 'react'
import Profile from "../../assets/images/Mohan-muruge.jpg"
import "./DefaultComments.scss"

function DefaultComments({ mainVideo }) {
  return (
    <div className=''>
      {mainVideo.comments.map((comment) => {
        const commentDate = new Date(comment.timestamp);
        return (
          <>
            <div className="DefaultComments">
              <div className='DefaultComments__profileContainer'>
                <img src={Profile} alt='Muhan' className='comments__profile' />
              </div>
              <div className='DefaultComments__nameDateComment'>
                <div className='DefaultComments__nameDate'>
                  <h4 className='DefaultComments__name'>{comment.name}</h4>
                  <span className="DefaultComments__date">{commentDate.toLocaleDateString()}</span>
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          </>
        )
      })}
    </div>

  )
}
export default DefaultComments

