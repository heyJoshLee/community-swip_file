import { GET_POSTS } from '../types/index' 

export default (posts = [], action ) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload
    default: 
      return posts
  }
}