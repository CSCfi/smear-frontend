import axios from 'axios'
import { AppDispatch } from '../../store/index'
import { setMenuItems } from '../../store/menuitems'

export const fetchInitialData = () => {
  return async (dispatch: AppDispatch) => {
    return axios
      .get('/api/structure')
      .then((response) => {
        dispatch(setMenuItems(response.data))
      })
      .catch((error) => {
        throw error
      })
  }
}
