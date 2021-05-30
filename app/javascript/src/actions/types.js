import * as api from '../api/api'

export const getTypes = () => async (dispatch) => {
  const { data } = await api.getTypes()
  return data.data
}