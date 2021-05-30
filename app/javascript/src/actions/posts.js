import * as api from '../api/api'
import { GET_POSTS, CREATE_POST } from '../types/index'

export const getPosts = () => async (dispatch) => {
  const { data } = await api.getPosts()
  dispatch({
    type: GET_POSTS,
    payload: data.data
  })
}

export const createPost = (postParams) => async (dispatch) => {
  const { data } = await api.createPost(postParams)
  console.log(data.data)
  dispatch({
    type: CREATE_POST,
    payload: data.data
  })
}