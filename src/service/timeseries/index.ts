import axios from 'axios'
import { AppDispatch } from '../../store/index'
import { setTimeSeries } from '../../store/timeseries'

export const fetchTimeSeries = () => {
  return async (dispatch: AppDispatch) => {
    return axios
      .get('/api/search/timeseries')
      .then((response) => {
        dispatch(setTimeSeries(response.data))
      })
      .catch((error) => {
        throw error
      })
  }
}
