import axios from 'axios'
import { AppDispatch } from '../../store/index'
import timeSeriesSlice from '../../store/timeseries'
import { TimeSeries } from '../../types'
import { API_URL, PATH_TIME_SERIES } from '../../constants'

const { setTimeSeries } = timeSeriesSlice.actions

export const fetchTimeSeries = (tablevariables: string[]) => {
  const params = new URLSearchParams()
  params.append('from', '2016-06-12T00:00:00.000')
  params.append('to', '2016-06-12T03:00:00.000')
  tablevariables.forEach((tablevariable) => params.append('tablevariable', tablevariable))

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      return axios
        .get(API_URL + PATH_TIME_SERIES, { params })
        .then((response) => {
          dispatch(setTimeSeries(response.data))
        })
        .catch((error) => {
          throw error
        })
    } else {
      dispatch(setTimeSeries({} as TimeSeries))
    }
  }
}
