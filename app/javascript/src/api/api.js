import axios from 'axios'


const ROOT_PATH = "/api/v1"
const POSTS_PATH = `${ROOT_PATH}/posts`
const TYPES_PATH = `${ROOT_PATH}/types`
const INDUSTRIES_PATH = `${ROOT_PATH}/industries`


export const getPosts = () => {
  return axios.get(POSTS_PATH)
}

export const createPost = (postParams) => {
  return axios.post(POSTS_PATH)
}

export const getTypes = () => {
  return axios.get(TYPES_PATH)
}

export const getIndustries = () => {
  return axios.get(INDUSTRIES_PATH)
}
