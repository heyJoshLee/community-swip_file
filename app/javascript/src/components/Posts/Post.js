import React from 'react'
import CommentList from '../Comments/CommentsList'

const Post = () => {
  return (
    <div>
      <h1>Post Name</h1>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <p>
The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 

    <h2>Comments</h2>
    <hr />
    <CommentList />
    </div>
  )
}

export default Post