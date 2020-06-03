import axios from 'axios'
import { AppDispatch } from '../../store/index'
import { setTimeSeries } from '../../store/timeseries'

export const fetchTimeSeries = (tablevariables: string[]) => {
  return async (dispatch: AppDispatch) => {
    return axios
      .get('/api/search/timeseries', {
        params: {
          tablevariable: tablevariables[0],
          from: '2018-06-12T00:00:00.000',
          to: '2018-06-12T03:00:00.000',
        },
      })
      .then((response) => {
        console.log(response.data)
        dispatch(setTimeSeries(response.data))
      })
      .catch((error) => {
        throw error
      })
  }
}
