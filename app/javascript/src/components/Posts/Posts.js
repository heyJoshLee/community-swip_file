import React, { useEffect } from 'react'
import { getPosts } from '../../actions/posts'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  
  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <div>
      <h1>Posts</h1>
      <p>This is our index page.</p>
    </div>
  )
}
 
export default Posts