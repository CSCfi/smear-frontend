import axios from 'axios'
import { AppDispatch } from '../../store/index'
import { setTimeSeries } from '../../store/timeseries'
import { TimeSeries } from '../../types'

export const fetchTimeSeries = (tablevariables: string[]) => {
  const params = new URLSearchParams()
  params.append('from', '2016-06-12T00:00:00.000')
  params.append('to', '2016-06-12T03:00:00.000')
  tablevariables.forEach((tablevariable) => params.append('tablevariable', tablevariable))

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      return axios
        .get('/api/search/timeseries', { params })
        .then((response) => {
          dispatch(setTimeSeries(response.data))
        })
        .catch((error) => {
          throw error
        })
    } else {
      dispatch(
        setTimeSeries({
          columns: [],
          data: [],
        } as TimeSeries)
      )
    }
  }
}
