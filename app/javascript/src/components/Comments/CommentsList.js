import React from 'react'
import CommentListItem from '../Comments/CommentListItem'
import New from '../Comments/New'

const CommentList = () => {

  const comments = [
    {
      attributes: {
        body: "This is the body of a comment"
      }
    },{
      attributes: {
        body: "This is the body of a comment"
      }
    }

  ]

  const renderComments = () => {
    return comments.map((comment) => {
      return <CommentListItem comment={comment} />
    })
  }


  return (
    <div>
      <New />
      <ul>
        {renderComments()}
      </ul>
    </div>
  )
}

export default CommentList