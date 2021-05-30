import React from 'react'

const CommentListItem = ({ comment }) => {
  return(
    <li>
      Author says...
      <p>
        {comment.attributes.body}
      </p>
    </li>
  )
}

export default CommentListItem