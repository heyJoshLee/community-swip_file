import { CREATE_POST } from '../types/index'

export default (post = null, action) => {
  switch (action.type) {
    case CREATE_POST:
      return action.payload
    default: 
    return post
  }
}