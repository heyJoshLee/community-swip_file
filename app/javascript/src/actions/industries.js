import * as api from '../api/api'

export const getIndustries = () => async (dispatch) => {
  console.log("GGETTTTTING INDUSTRIES")
  const { data } = await api.getIndustries()
  return data.data
}