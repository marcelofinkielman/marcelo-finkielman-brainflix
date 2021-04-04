import React from 'react'

function DefaultComments({mainVideo}) {
  return (
    <div>
      {mainVideo.comments.map((comment) =>{
      const commentDate = new Date (comment.timestamp);
      return(
        <div>
          <h4>{comment.name}</h4>
          <span>{commentDate.toLocaleDateString()}</span>
          <p>{comment.comment}</p>
        </div>
      )
    })}
    </div>
    
  ) 
  }
export default DefaultComments

