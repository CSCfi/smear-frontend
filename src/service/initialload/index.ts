import axios from 'axios'
import { AppDispatch } from '../../store/index'
import { setMenuItems } from '../../store/menuitems'
import { API_URL, PATH_STRUCTURE } from '../../constants'

export const fetchInitialData = () => {
  return async (dispatch: AppDispatch) => {
    return axios
      .get(API_URL + PATH_STRUCTURE)
      .then((response) => {
        dispatch(setMenuItems(response.data))
      })
      .catch((error) => {
        throw error
      })
  }
}
